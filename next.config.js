/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Static export for GitHub Pages / Vercel
  basePath: '', // Set to '/repo-name' if hosting on GitHub Pages in a subdirectory
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
