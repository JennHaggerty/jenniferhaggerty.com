import EmailIcon from "./components/Svgs/email";
import GithubIcon from "./components/Svgs/github";
import LinkedInIcon from "./components/Svgs/linkedin";
import ResumeIcon from "./components/Svgs/resume";
import RssIcon from "./components/Svgs/rss";

export const site = {
  name: "Jennifer Haggerty",
  tagline: "Full-stack Developer",
  location: "Augusta, GA",
  copyright: "Copyright © {{year}} Jennifer Haggerty.",
  font: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap",
  description: (
    <div className="p">
      <p className="pb-3">
        I enjoy creating and maintaining user-centric, ADA compliant web
        applications. My favorite tools are React, TypeScript, MongoDB, Next.js,
        TailwindCSS, and <a href="https://github.com/JennHaggerty">Github.</a>
      </p>
      <p>
        When not at the computer I'm in the garden, spinning fire, or at the
        park with my dogs.
      </p>
    </div>
  ),
  menus: [
    {
      id: "text-nav",
      customClass: "text-nav",
      items: [
        {
          href: "mailto:thejenniferhaggerty@gmail.com",
          content: "Email",
        },
        {
          href: "jenniferhaggerty_resume.pdf",
          content: "Resume",
          target: "_blank",
        },
        {
          href: "https://github.com/JennHaggerty",
          content: "Github",
          rel: "rel",
          target: "_blank",
        },
        {
          href: "https://jennhaggerty.github.io",
          content: "Blog",
          rel: "rel",
          target: "_blank",
        },
        {
          href: "https://www.linkedin.com/in/jennifer-haggerty-01915556",
          content: "LinkedIn",
          rel: "rel",
          target: "_blank",
        },
      ],
    },
    {
      id: "icon-nav",
      customClass: "icon-nav",
      items: [
        {
          ariaLabel: "Email.",
          href: "mailto:thejenniferhaggerty@gmail.com",
          content: <EmailIcon className="icon-link" />,
        },
        {
          ariaLabel: "Download resume.",
          href: "jenniferhaggerty_resume.pdf",
          content: <ResumeIcon className="icon-link" />,
          target: "_blank",
        },
        {
          ariaLabel: "Check out her Github.",
          href: "https://github.com/JennHaggerty",
          content: <GithubIcon className="icon-link" />,
          rel: "rel",
          target: "_blank",
        },
        {
          ariaLabel: "Follow the blog",
          href: "https://jennhaggerty.github.io",
          content: <RssIcon className="icon-link" />,
          rel: "rel",
          target: "_blank",
        },
        {
          ariaLabel: "LinkedIn.",
          href: "https://www.linkedin.com/in/jennifer-haggerty-01915556",
          content: <LinkedInIcon className="icon-link" />,
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
      "image-src": "thumbnails/paulaschoice.png",
      "image-alt": "",
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
      "image-alt": "",
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
      "image-alt": "",
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
      "image-src": "thumbnails/onesource.png",
      "image-alt": "",
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
      "image-src": "thumbnails/taxslayer.png",
      "image-alt": "",
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
      "image-alt": "",
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
      "image-alt": "",
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
      "image-alt": "",
      href: "https://www.fast-growing-trees.com",
      rel: "external",
      target: "_blank",
      title: "Fast Growing Trees",
      date: "'18-'19",
      tagline: "Shopify",
      items: ["I did a thing", "I did another thing"],
      location: "Fort Mill, SC",
    },
    {
      "image-src": "thumbnails/studiovonjenn.png",
      "image-alt": "",
      href: "https://www.studiovonjenn.com",
      rel: "external",
      target: "_blank",
      title: "Studio von Jenn",
      date: "'25",
      tagline: "Next.js, React.js w/TypeScript",
      items: ["I did a thing", "I did another thing"],
      location: "Augusta, GA",
      isPersonalProject: true,
    },
  ],
};
