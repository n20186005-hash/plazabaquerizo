import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // OpenNext 依赖 standalone 产物（.next/standalone）打包 Worker，
  // 使用 "export" 会导致 .open-next 打包阶段找不到 pages-manifest.json
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "./"),
  turbopack: {},
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
