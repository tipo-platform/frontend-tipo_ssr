import type { NextConfig } from "next";

// GitHub Pages отдаёт только статику: собираем сайт в out/ заранее.
// BASE_PATH задаёт workflow деплоя (/frontend-tipo_ssr для адреса tipo-platform.github.io/...),
// для своего домена и локально — пусто.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
