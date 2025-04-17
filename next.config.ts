import type { NextConfig } from "next";

const imageHosts = [
  "tailwindcss.com",
  "images.unsplash.com",
  "plus.unsplash.com",
  "placehold.co",
  "img.freepik.com",
  "docs.material-tailwind.com",
  "media.istockphoto.com",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: imageHosts.map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
      pathname: "/**",
    })),
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
