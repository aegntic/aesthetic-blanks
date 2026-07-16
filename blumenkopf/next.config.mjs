/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [] },
  // Parent monorepo has its own lockfiles; pin tracing root to this blank so Next
  // doesn't mis-infer the workspace root and pull in unrelated node_modules.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
