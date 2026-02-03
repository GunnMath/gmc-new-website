/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Required for GitHub Pages routing
  basePath: '/gmc-new-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;