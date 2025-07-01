import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains:  [
      "avatars.githubusercontent.com", // GitHub
      "lh3.googleusercontent.com",     // Google
    ],
  },
};

export default nextConfig;
