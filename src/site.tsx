import EmailIcon from "./assets/svgs/email";
import GithubIcon from "./assets/svgs/github";
import LinkedInIcon from "./assets/svgs/linkedin";
import ResumeIcon from "./assets/svgs/resume";
import RssIcon from "./assets/svgs/rss";
import StarIcon from "./assets/svgs/star";

export const site = {
  name: "Jennifer Haggerty",
  tagline: "Full-stack Developer",
  description: (
    <>
      I enjoy creating and maintaining user-centric, ADA compliant web
      applications - 21 years and counting! My favorite tools are React,
      TypeScript, Next.js, TailwindCSS, and{" "}
      <a href="https://github.com/JennHaggerty">Github</a>.
    </>
  ),
  menus: [
    {
      id: "main-navigation",
      location: "header",
      items: [
        {
          ariaLabel: "Email.",
          href: "mailto:haggertyj@protonmail.com",
          content: (
            <>
              <EmailIcon className="icon-link" />

              <StarIcon className="star" />
            </>
          ),
        },
        {
          ariaLabel: "Download resume.",
          href: "jenniferhaggerty_resume.pdf",
          content: (
            <>
              <ResumeIcon className="icon-link" />

              <StarIcon className="star" />
            </>
          ),
          target: "_blank",
        },
        {
          ariaLabel: "Check out her Github.",
          href: "https://github.com/JennHaggerty",
          content: (
            <>
              <GithubIcon className="icon-link" />

              <StarIcon className="star" />
            </>
          ),
          rel: "rel",
          target: "_blank",
        },
        {
          ariaLabel: "Follow the blog",
          href: "https://jennhaggerty.github.io",
          content: (
            <>
              <RssIcon className="icon-link" />

              <StarIcon className="star" />
            </>
          ),
          rel: "rel",
          target: "_blank",
        },
        {
          ariaLabel: "LinkedIn.",
          href: "https://www.linkedin.com/in/jennifer-haggerty-01915556",
          content: (
            <>
              <LinkedInIcon className="icon-link" />

              <StarIcon className="star" />
            </>
          ),
          rel: "rel",
          target: "_blank",
        },
      ],
    },
  ],
  skills: [
    {
      title: "Front End",
      content: "HTML, CSS, JavaScript, React, Webpack, Material UI, Bootstrap",
    },
    {
      title: "Back End",
      content: "Node, Java, ASP.NET, C#",
    },
    {
      title: "Database",
      content: "MySQL, MongoDB, GraphQL",
    },
    {
      title: "Mobile",
      content: "React Native, Ionic, Java, SDK, Swift",
    },
    {
      title: "Languages",
      content: "HTML, CSS/SCSS, JavaScript, TypeScript, Java, C#, PHP",
    },
    {
      title: "Frameworks",
      content:
        "Next.js, Node.js, React, Vue, Angular, Bootstrap, HeroUI, MaterialUI",
    },
    {
      title: "Platforms",
      content: "SFCC, Shopify, Wordpress",
    },
    {
      title: "Databases",
      content: "MySQL, MariaDB, PostgreSQL, MongoDB",
    },
    {
      title: "Testing",
      content: "Puppeteer, Jest",
    },
    {
      title: "Version Control",
      content: "Github, Gitlab, Bitbucket, Azure Devops, Jira",
    },
    {
      title: "Other",
      content:
        "Docker, Vercel, Sketch, AWS, Figma, Adobe Creative Suite, VSCode, iTerm with Tmux",
    },
  ],
  portfolio: [
    {
      "image-src": "thumbnails/myjobquest.png",
      "image-alt": "MyJobQuest.io",
      href: "https://www.myjobquest.io",
      rel: "external",
      target: "_blank",
      title: "MyJobQuest.io",
      date: "'25",
      tagline: "Next.js, React.js w/TypeScript",
      items: ["I did a thing", "I did another thing"],
      location: "Augusta, GA",
      isPersonalProject: true,
    },
    {
      "image-src": "thumbnails/onesource.png",
      "image-alt": "OneSource Supply",
      href: "https://www.onesourcesupplyco.com",
      rel: "external",
      target: "_blank",
      title: "OneSource",
      date: "'24",
      tagline: "Shopify",
      items: ["I did a thing", "I did another thing"],
      location: "Remote",
    },
    {
      "image-src": "thumbnails/paulaschoice.png",
      "image-alt": "Paula's Choice",
      href: "https://www.paulaschoice.com",
      rel: "external",
      target: "_blank",
      title: "Paula's Choice",
      date: "'23-'24",
      tagline: "SFCC, React.js",
      items: ["I did a thing", "I did another thing"],
      location: "Remote",
    },
    {
      "image-src": "thumbnails/denon.png",
      "image-alt": "Denon Premium Sound",
      href: "https://www.denon.com/en-us/",
      rel: "external",
      target: "_blank",
      title: "Denon",
      date: "'23",
      tagline: "Shopify",
      items: ["I did a thing", "I did another thing"],
      location: "Remote",
    },
    {
      "image-src": "thumbnails/masimo.png",
      "image-alt": "Masimo Personal and Professional Health",
      href: "https://www.masimo.com",
      rel: "external",
      target: "_blank",
      title: "Masimo",
      date: "'23",
      tagline: "Shopify",
      items: ["I did a thing", "I did another thing"],
      location: "Remote",
    },
    {
      "image-src": "thumbnails/taxslayer.png",
      "image-alt": "TaxSlayer",
      href: "https://www.taxslayer.com",
      rel: "external",
      target: "_blank",
      title: "TaxSlayer",
      date: "'21-'22",
      tagline: "C#/ASP.NET, React.js",
      items: ["I did a thing", "I did another thing"],
      location: "Augusta, GA",
    },
    {
      "image-src": "thumbnails/psychedelicart.png",
      "image-alt": "Psychedelic Art Exchange",
      href: "https://www.concertpostergallery.com",
      rel: "external",
      target: "_blank",
      title: "Psychedelic Art",
      date: "'19-'20",
      tagline: "Shopify",
      items: ["I did a thing", "I did another thing"],
      location: "Remote",
    },
    {
      "image-src": "thumbnails/gocollect.png",
      "image-alt": "GoCollect",
      href: "https://www.gocollect.com",
      rel: "external",
      target: "_blank",
      title: "GoCollect",
      date: "'19-'20",
      tagline: "PHP/Symfony",
      items: ["I did a thing", "I did another thing"],
      location: "Charlotte, NC",
    },
    {
      "image-src": "thumbnails/fastgrowingtrees.png",
      "image-alt": "Fast Growing Trees",
      href: "https://www.fast-growing-trees.com",
      rel: "external",
      target: "_blank",
      title: "Fast Growing Trees",
      date: "'18-'19",
      tagline: "Shopify",
      items: ["I did a thing", "I did another thing"],
      location: "Fort Mill, SC",
    },
  ],
  copyright: "Copyright © {{year}}. J. Haggerty. All rights reserved.",
};
