import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hapus output: "export" karena kita butuh server untuk auth
  // output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;