/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      domains: ['creatorspace.imgix.net'],
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  