/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'v0.blob.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Make sure there are no redirects or rewrites that could be causing issues
}

export default nextConfig
