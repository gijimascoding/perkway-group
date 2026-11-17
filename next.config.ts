import type { NextConfig } from "next";

const securityHeaders = [
  // HSTS is set by the host; the rest are the standard institutional set.
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // The home directory carries a stray package-lock.json; pin tracing here so
  // the build stops guessing the workspace root.
  outputFileTracingRoot: __dirname,
  async redirects() {
    // The leadership page was retired; send old links and search results to About.
    return [{ source: "/leadership", destination: "/about", permanent: true }];
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  images: {
    // Cap practical delivery so full-bleed images stop requesting w=3840.
    // 1440 added so the most common desktop width gets an exact-fit render
    // instead of rounding up to 1600 (~20% fewer bytes on the LCP image).
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1600, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    // AVIF first: ~35% fewer bytes than webp at the same q, which is what buys
    // the hero its LCP budget. Delivery only.
    formats: ["image/avif", "image/webp"],
    // 82 is the site default.
    qualities: [82],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.perkways.com" },
    ],
  },
};

export default nextConfig;
