/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      process.env.NEXT_PUBLIC_STRAPI_API_URL_DOMAIN_ONLY || "127.0.0.1",
    ],
  },
}

module.exports = nextConfig
