/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This tells Next.js to build a static site for GitHub Pages
  images: {
    unoptimized: true, // This fixes the error by disabling the image server
  },
};

export default nextConfig;