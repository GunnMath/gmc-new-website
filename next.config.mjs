/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // ADD THIS LINE BACK:
  basePath: '/gmc-new-website', 
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;