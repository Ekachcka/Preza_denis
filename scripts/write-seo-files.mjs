import { writeFileSync } from "node:fs";
import { join } from "node:path";

const [dir, siteUrl, basePath = ""] = process.argv.slice(2);
if (!dir || !siteUrl) {
  process.exit(1);
}

const site = siteUrl.replace(/\/$/, "");

const robots = [
  "User-agent: *",
  "Allow: /",
  `Disallow: ${basePath}/proposals/`,
  `Disallow: ${basePath}/arrows/`,
  "",
  `Sitemap: ${site}/sitemap.xml`,
  "",
].join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
  </url>
</urlset>
`;

writeFileSync(join(dir, "robots.txt"), robots);
writeFileSync(join(dir, "sitemap.xml"), sitemap);
