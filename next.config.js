/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // He actualizado esto a true para mantener la configuración final
  images: {
    disableStaticImages: true,
  },
  env: {
    NEXT_PUBLIC_URL_API: process.env.NEXT_PUBLIC_URL_API,
  },
  i18n: {
    locales: ['en', 'es', 'de', 'pt'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};

module.exports = nextConfig;
