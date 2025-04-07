/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // List external domains if using next/image with external URLs
    // domains: ['example.com'],
    // Explicitly disable image optimization for broader platform compatibility
    // Re-evaluate if deploying to Vercel where optimization is built-in
    unoptimized: true,
  },
  // REMOVED: rewrites section is no longer needed

  // Add security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}

export default nextConfig