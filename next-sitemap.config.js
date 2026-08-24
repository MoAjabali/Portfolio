const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://moajabali.com"

module.exports = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.8,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      }
    ],
    additionalSitemaps: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/api/sitemap`
    ]
  },
  transform: async (config, path) => {
    let priority = 0.8
    let changefreq = "monthly"

    if (path === "/") {
      priority = 1.0
      changefreq = "monthly"
    } else if (path.includes("projects")) {
      priority = 0.9
      changefreq = "weekly"
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/#about"),
    await config.transform(config, "/#education"),
    await config.transform(config, "/#skills"),
    await config.transform(config, "/#projects"),
    await config.transform(config, "/#services"),
    await config.transform(config, "/#contact")
  ]
}
