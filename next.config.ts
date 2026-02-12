import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/jennifer_haggerty_interface_developer.pdf",
        destination: "/",
        permanent: true,
      },
      {
        source: "/jhaggerty_resume.pdf",
        destination: "/",
        permanent: true,
      },
      {
        source: "/making-a-great-image-lighting/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gallery-category/photography/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/project/anastasiya/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/project/melanie-beauty/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/project/sith-egan/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
