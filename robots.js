const fs = require("fs")
const path = require("path")

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://moajabali.com"

const robotsContent = `User-agent: *
Allow: /
Allow: /api/sitemap

# Crawl-delay directive (optional)
Crawl-delay: 10

# Prevent indexing of internal API routes except sitemap
Disallow: /api/
Allow: /api/sitemap

# Sitemap references
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/api/sitemap`

const publicDir = path.join(__dirname, "public")
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsContent, "utf8")
console.log("robots.txt generated successfully in public/")

module.exports = { robotsContent, baseUrl }
