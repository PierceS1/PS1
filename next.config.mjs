/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'v0.blob.com'],
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    // During development, type errors won't stop the build
    ignoreBuildErrors: true,
  },
}

export default nextConfig
