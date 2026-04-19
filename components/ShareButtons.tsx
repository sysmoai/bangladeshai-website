'use client'

interface ShareButtonsProps {
  title: string
  path: string
}

export default function ShareButtons({ title, path }: ShareButtonsProps) {
  const url = `https://bangladeshai.org${path}`

  return (
    <div className="flex flex-wrap gap-3 items-center mt-8 pt-8 border-t border-border-color">
      <span className="text-sm text-text-secondary">Share this:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-[#1DA1F2] text-white text-sm rounded hover:opacity-90 transition-opacity"
      >
        Twitter/X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-[#0077B5] text-white text-sm rounded hover:opacity-90 transition-opacity"
      >
        LinkedIn
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-[#25D366] text-white text-sm rounded hover:opacity-90 transition-opacity"
      >
        WhatsApp
      </a>
    </div>
  )
}
