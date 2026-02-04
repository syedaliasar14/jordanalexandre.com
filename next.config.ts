import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
    // Optimize image handling
    formats: ['image/webp'],
    deviceSizes: [360, 768, 1024, 1440],
    imageSizes: [64, 128, 256],
    // Increase cache time to reduce requests
    minimumCacheTTL: 2678400, // 31 days
    // Limit concurrent image optimizations 
    dangerouslyAllowSVG: false,
  },
  // Enable compression to reduce bandwidth
  compress: true,
  // Optimize builds
  experimental: {
    optimizePackageImports: ['lucide-react', 'swiper'],
  },
};

export default nextConfig;
