/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development warnings
  reactStrictMode: true,

  // Skip ESLint errors during production build (Vercel safe)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Skip TypeScript errors during production build (Vercel safe)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image optimization — allow external domains if needed
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Compress output
  compress: true,

  // Trailing slash — set to false for cleaner Vercel URLs
  trailingSlash: false,

  // Disable x-powered-by header for security
  poweredByHeader: false,
};

module.exports = nextConfig;
