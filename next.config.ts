import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  // A stray package-lock.json in the user profile confuses Next's workspace-root
  // inference; pin tracing to this folder instead.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
