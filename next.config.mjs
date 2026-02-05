/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath removed for custom domain (compete.gunnmathcircle.org)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
