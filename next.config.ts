import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors in production
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore TypeScript errors in production
  },
};

export default nextConfig;
