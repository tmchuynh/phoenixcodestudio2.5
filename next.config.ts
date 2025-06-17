import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const imageHosts = [
  "tailwindcss.com",
  "images.unsplash.com",
  "plus.unsplash.com",
  "img.freepik.com",
  "i.ytimg.com",
  "media.licdn.com",
  "tailkits.com",
  "resend.com",
  "i.etsystatic.com",
  "media.istockphoto.com",
];

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
