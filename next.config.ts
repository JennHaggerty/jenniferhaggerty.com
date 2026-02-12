import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "http://jenniferhaggerty.com/",
        destination: "https://www.jenniferhaggerty.com/",
        permanent: true,
      },
      {
        source: "https://jenniferhaggerty.com/",
        destination: "https://www.jenniferhaggerty.com/",
        permanent: true,
      },
      {
        source: "http://www.jenniferhaggerty.com/",
        destination: "https://www.jenniferhaggerty.com/",
        permanent: true,
      },
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
