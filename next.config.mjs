import dotenv from "dotenv";

const env = {
  development: dotenv.config({ path: "./src/env/.env.local" }).parsed,
  production: dotenv.config({ path: "./src/env/.env.prod" }).parsed,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    ...env.development,
    ...(process.env.NODE_ENV === "production" ? env.production : {}),
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    other: {
      me: ["jinha6707@gmail.com", "https://cafecok.site/"],
    },
  },

  images: {
    domains: [
      "//hororok-bucket.kr.object.ncloudstorage.com",
      "kr.object.ncloudstorage.com",
      "d2jel1wui0sscy.cloudfront.net",
    ],
  },
};

export default nextConfig;
