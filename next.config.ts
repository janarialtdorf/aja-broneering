import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['193.40.232.205'],
  cacheComponents: true,
  partialPrefetching: true,
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