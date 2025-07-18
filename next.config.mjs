// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables React's Strict Mode. This is a best practice for catching
  // potential problems in your application during development.
  reactStrictMode: true,

  // Configure which external domains are allowed for using the Next.js <Image> component.
  // This is a security measure to prevent your app from loading images from malicious sources.
  // Add any domains you plan to source images from (e.g., a CDN, a headless CMS).
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Example for a popular image host
        port: '',
        pathname: '/**',
      },
      // Add another object here for any other domain you need.
      // {
      //   protocol: 'https',
      //   hostname: 'your-cdn.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;