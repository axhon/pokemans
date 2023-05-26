const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtractPlugin = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
}

module.exports = withVanillaExtractPlugin(nextConfig);
