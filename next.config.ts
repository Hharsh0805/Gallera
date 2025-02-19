import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'photos.zillowstatic.com',
      'cdn.prod.website-files.com',
      'thumbs.dreamstime.com',
      'images.unsplash.com', // Add this domain to allow images from Unsplash
    ],
  },
};

export default nextConfig;