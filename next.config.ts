import type { NextConfig } from "next";

const isPages = process.env.DEPLOY_TARGET === "pages";

const pagesConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  trailingSlash: true,
  images: { unoptimized: true },
};

const appConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
};

const nextConfig: NextConfig = {
  ...(isPages ? pagesConfig : appConfig),
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
