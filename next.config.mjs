/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site can be hosted anywhere (Vercel, Netlify, GitHub Pages).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
