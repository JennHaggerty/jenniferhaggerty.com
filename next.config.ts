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
        source: "/contact/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio/",
        destination: "/web-development/portfolio",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/photography/galleries",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/prices",
        destination: "/photography/prices",
        permanent: true,
      },
      {
        source: "/portfolio/paulaschoice",
        destination: "/web-development/portfolio/paulaschoice",
        permanent: true,
      },
      {
        source: "/portfolio/denon",
        destination: "/web-development/portfolio/denon",
        permanent: true,
      },
      {
        source: "/portfolio/masimo",
        destination: "/web-development/portfolio/masimo",
        permanent: true,
      },
      {
        source: "/portfolio/onesource",
        destination: "/web-development/portfolio/onesource",
        permanent: true,
      },
      {
        source: "/portfolio/taxslayer",
        destination: "/web-development/portfolio/taxslayer",
        permanent: true,
      },
      {
        source: "/portfolio/psychedelicart",
        destination: "/web-development/portfolio/psychedelicart",
        permanent: true,
      },
      {
        source: "/portfolio/gocollect",
        destination: "/web-development/portfolio/gocollect",
        permanent: true,
      },
      {
        source: "/portfolio/fastgrowingtrees",
        destination: "/web-development/portfolio/fastgrowingtrees",
        permanent: true,
      },
      {
        source: "/portfolio/studiovonjenn",
        destination: "/web-development/portfolio/studiovonjenn",
        permanent: true,
      },
      {
        source: "/gallery/atmos0426",
        destination: "/photography/galleries/atmos0426",
        permanent: true,
      },
      {
        source: "/gallery/no-kings-protest-march-28-2026",
        destination: "/photography/galleries/no-kings-protest-march-28-2026",
        permanent: true,
      },
      {
        source: "/gallery/atmos0226",
        destination: "/photography/galleries/atmos0226",
        permanent: true,
      },
      {
        source: "/gallery/atmos0126",
        destination: "/photography/galleries/atmos0126",
        permanent: true,
      },
      {
        source: "/gallery/pirateparty112025",
        destination: "/photography/galleries/pirateparty112025",
        permanent: true,
      },
      {
        source: "/gallery/atmos1125",
        destination: "/photography/galleries/atmos1125",
        permanent: true,
      },
      {
        source: "/gallery/atmos1025",
        destination: "/photography/galleries/atmos1025",
        permanent: true,
      },
      {
        source: "/gallery/atmos0925",
        destination: "/photography/galleries/atmos0925",
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
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/gallery-category/photography/",
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/project/anastasiya/",
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/project/melanie-beauty/",
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/project/sith-egan/",
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/",
        permanent: true,
      },
      {
        source: "/connect",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/product-category/costumes-and-accessories",
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/product-category/other",
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/product-tag/thank-you",
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/2015",
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/2018",
        destination: "/photography",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
