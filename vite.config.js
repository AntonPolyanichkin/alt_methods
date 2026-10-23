import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import process from "node:process";
import { loadEnv } from "vite";
import { getSeoPaths, getSiteOrigin, SUPPORTED_LANGS } from "./src/app/seo/seoConfig.js";

function seoFilesPlugin(siteOrigin) {
  return {
    name: "seo-files",
    generateBundle() {
      const robots = ["User-agent: *", "Allow: /"];
      if (siteOrigin) robots.push(`Sitemap: ${siteOrigin}/sitemap.xml`);
      this.emitFile({ type: "asset", fileName: "robots.txt", source: `${robots.join("\n")}\n` });

      if (!siteOrigin) {
        this.warn("VITE_SITE_URL is not configured; canonical URLs, hreflang, and sitemap.xml are omitted.");
        return;
      }

      const paths = getSeoPaths();
      const urls = SUPPORTED_LANGS.flatMap((lang) =>
        paths.map((path) => `${siteOrigin}/${lang}${path ? `/${path}` : ""}`),
      );
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
        "</urlset>",
      ].join("\n");
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: `${sitemap}\n` });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteOrigin = getSiteOrigin("https://altmethods.netlify.app");

  if (env.VITE_SITE_URL && !siteOrigin) {
    console.warn("Ignoring invalid VITE_SITE_URL. Use the HTTPS production origin without a path.");
  }

  return {
    plugins: [react(), seoFilesPlugin(siteOrigin)],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
