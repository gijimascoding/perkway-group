import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cap practical delivery so full-bleed images stop requesting w=3840.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.perkways.com" },
    ],
  },
};

export default nextConfig;
