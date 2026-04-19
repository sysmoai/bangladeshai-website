interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bangladeshai.org'
const defaultImage = `${siteUrl}/og-image.png`

export default function SEO({
  title = 'BangladeshAI.org — Independent AI Policy Research',
  description = 'Bangladesh\'s AI Readiness Score: 47.12/100. Independent AI policy research, education and advocacy for 170 million people.',
  image = defaultImage,
  url = siteUrl,
  type = 'website',
}: SEOProps) {
  const fullTitle = title.includes('BangladeshAI') ? title : `${title} | BangladeshAI.org`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="bn_BD" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bangladeshai" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
