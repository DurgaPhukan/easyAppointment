import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  webpack(config) {
    // Adding alias for 'public' folder to use in imports
    config.resolve.alias['@public'] = path.resolve(__dirname, 'public');

    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { icon: true },
        },
      ],
    });

    return config;
  },
  images: {
    domains: ['localhost'], // You can add your domains if you're using remote images
  },
};

export default nextConfig;
