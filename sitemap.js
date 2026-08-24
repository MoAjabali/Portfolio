const fs = require("fs")
const path = require("path")

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://moajabali.com"
const currentDate = new Date().toISOString()

const urls = [
  { loc: `${baseUrl}/`, priority: "1.00", changefreq: "monthly" },
  { loc: `${baseUrl}/#about`, priority: "0.80", changefreq: "monthly" },
  { loc: `${baseUrl}/#education`, priority: "0.70", changefreq: "monthly" },
  { loc: `${baseUrl}/#skills`, priority: "0.80", changefreq: "monthly" },
  { loc: `${baseUrl}/#projects`, priority: "0.90", changefreq: "weekly" },
  { loc: `${baseUrl}/#services`, priority: "0.70", changefreq: "monthly" },
  { loc: `${baseUrl}/#contact`, priority: "0.60", changefreq: "monthly" }
]

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`

const publicDir = path.join(__dirname, "public")
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapContent, "utf8")
console.log("sitemap.xml generated successfully in public/")

const robotsContent = `User-agent: *
Allow: /
Allow: /api/sitemap
Disallow: /api/
Crawl-delay: 10

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/api/sitemap
`

fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsContent, "utf8")
console.log("robots.txt generated successfully in public/")

module.exports = { sitemapContent, robotsContent, urls, baseUrl }
