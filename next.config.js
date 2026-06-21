/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development warnings
  reactStrictMode: true,

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

  // Power Vercel deployment — output is 'standalone' for Docker / or default for Vercel
  // output: 'standalone', // Uncomment only if using Docker

  // Trailing slash — set to false for cleaner Vercel URLs
  trailingSlash: false,

  // Disable x-powered-by header for security
  poweredByHeader: false,
};

module.exports = nextConfig;
