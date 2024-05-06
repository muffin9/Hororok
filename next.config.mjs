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

  images: {
    domains: [
      "//hororok-bucket.kr.object.ncloudstorage.com",
      "kr.object.ncloudstorage.com",
    ],
  },
};

export default nextConfig;
