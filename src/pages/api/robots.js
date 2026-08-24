export default function robots(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://moajabali.com"

  const robotsTxt = `User-agent: *
Allow: /
Allow: /api/sitemap

# Crawl-delay directive (optional, not all crawlers respect this)
Crawl-delay: 10

# Prevent indexing of API routes except sitemap
Disallow: /api/
Allow: /api/sitemap

# Sitemap references
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/api/sitemap`

  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain; charset=utf-8")
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400")
  res.write(robotsTxt)
  res.end()
}
