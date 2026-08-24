export default function sitemap(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://moajabali.com"
  const currentDate = new Date().toISOString()

  const urls = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "1.00"
    },
    {
      loc: `${baseUrl}/#about`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.80"
    },
    {
      loc: `${baseUrl}/#education`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.70"
    },
    {
      loc: `${baseUrl}/#skills`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.80"
    },
    {
      loc: `${baseUrl}/#projects`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.90"
    },
    {
      loc: `${baseUrl}/#services`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.70"
    },
    {
      loc: `${baseUrl}/#contact`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.60"
    }
  ]

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join("\n")}
</urlset>`

  res.statusCode = 200
  res.setHeader("Content-Type", "application/xml")
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400")
  res.write(sitemapXml)
  res.end()
}
