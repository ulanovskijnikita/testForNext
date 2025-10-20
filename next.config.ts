import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      
      {

        protocol: 'https',
        hostname: 'hwfiles.storage.yandexcloud.net',
        pathname: '/media/**',
      }
    ],
  },
};

export default nextConfig