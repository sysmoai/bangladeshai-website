import { redirect } from 'next/navigation'

export default function EnLocaleCatchAll({ params }: { params: { slug: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '/'
  redirect(path)
}
