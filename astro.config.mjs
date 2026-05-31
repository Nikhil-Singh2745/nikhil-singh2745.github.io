// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const isProd = process.env.NODE_ENV === "production";
const repoBase = process.env.COREDUMP_BASE ?? "/";

export default defineConfig({
  site: "https://nikhil-singh2745.github.io",
  base: isProd ? repoBase : "/",
  output: "static",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: false,
  },
  experimental: {
    clientPrerender: true,
  },
});
