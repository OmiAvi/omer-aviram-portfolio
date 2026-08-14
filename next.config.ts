import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    qualities: [75, 100],
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
