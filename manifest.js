const fs = require("fs")
const path = require("path")

const manifest = {
  name: "Mohammed Aljablai - Portfolio",
  short_name: "MoAjabali Portfolio",
  description:
    "Full-Stack Developer Portfolio - Mohammed Aljablai. Showcasing projects, skills, and services in web development.",
  start_url: "/",
  display: "standalone",
  background_color: "#0a0a0a",
  theme_color: "#0a0a0a",
  orientation: "portrait-primary",
  categories: ["portfolio", "developer", "technology"],
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "web development",
    "react",
    "next.js",
    "frontend",
    "backend",
    "programmer",
    "software engineer",
    "javascript",
    "typescript",
    "node.js"
  ],
  icons: [
    {
      src: "/favicon.ico",
      sizes: "any",
      type: "image/x-icon",
      purpose: "any maskable"
    },
    {
      src: "/logo.svg",
      sizes: "any",
      type: "image/svg+xml",
      purpose: "any maskable"
    }
  ],
  lang: "en",
  dir: "ltr",
  scope: "/",
  prefer_related_applications: false
}

const publicDir = path.join(__dirname, "public")
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

fs.writeFileSync(
  path.join(publicDir, "manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8"
)
console.log("manifest.json generated successfully in public/")

module.exports = { manifest }
