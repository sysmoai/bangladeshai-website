import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  readTime: string
  author: string
}

export interface Post extends PostMeta {
  content: string
}

function getContentDir(type: 'blog' | 'research', lang: 'en' | 'bn') {
  return path.join(process.cwd(), 'content', type, lang)
}

export function getAllPosts(type: 'blog' | 'research', lang: 'en' | 'bn' = 'en'): PostMeta[] {
  const dir = getContentDir(type, lang)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
      const { data } = matter(raw)
      return {
        title: data.title || '',
        slug: data.slug || file.replace(/\.mdx?$/, ''),
        date: data.date || '',
        category: data.category || '',
        excerpt: data.excerpt || '',
        readTime: data.readTime || '5',
        author: data.author || 'Emon Hossain',
      } as PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(
  type: 'blog' | 'research',
  slug: string,
  lang: 'en' | 'bn' = 'en'
): Post | null {
  const dir = getContentDir(type, lang)
  const extensions = ['.mdx', '.md']

  for (const ext of extensions) {
    const filePath = path.join(dir, `${slug}${ext}`)
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      return {
        title: data.title || '',
        slug: data.slug || slug,
        date: data.date || '',
        category: data.category || '',
        excerpt: data.excerpt || '',
        readTime: data.readTime || '5',
        author: data.author || 'Emon Hossain',
        content,
      }
    }
  }

  return null
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
