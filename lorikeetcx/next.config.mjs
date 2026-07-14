/** @type {import('next').NextConfig} */
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextConfig = {
  images: { remotePatterns: [] },
  outputFileTracingRoot: __dirname,
  webpack: (config) => {
    config.resolve.alias = { ...config.resolve.alias, "@": __dirname };
    return config;
  },
};
export default nextConfig;
