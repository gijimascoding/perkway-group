import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cap practical delivery so full-bleed images stop requesting w=3840.
    // 1440 added so the most common desktop width gets an exact-fit render
    // instead of rounding up to 1600 (~20% fewer bytes on the LCP image).
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1600, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    // AVIF first: ~35% fewer bytes than webp at the same q, which is what buys
    // the hero its LCP budget. Delivery only.
    formats: ["image/avif", "image/webp"],
    // 82 is the site default; 95 is reserved for the leadership portraits,
    // where faces show codec softness at 82 and the files are small anyway.
    qualities: [82, 95],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.perkways.com" },
    ],
  },
};

export default nextConfig;
