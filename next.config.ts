import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://demetrodigital.com.br/images/**")],
  },
};

export default nextConfig;
