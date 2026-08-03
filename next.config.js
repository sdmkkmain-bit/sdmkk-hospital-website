/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'customer-assets-jai6qajn.emergentagent.net' },
      { protocol: 'https', hostname: '**.emergentagent.net' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
