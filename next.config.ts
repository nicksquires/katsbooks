import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // This tells Next.js to generate static HTML/CSS/JS
  trailingSlash: true,   // <--- ESSENTIAL for WHC folders
  // WHC doesn't allow Next.js' image optimization
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
