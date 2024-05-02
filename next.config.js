/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    disableStaticImages: true,
  },
  env: {
    NEXT_PUBLIC_URL_API: process.env.NEXT_PUBLIC_URL_API,
  },
};

module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  i18n: {
  locales: ['en', 'es', 'de', 'pt'],
  defaultLocale: 'en',
  },
}