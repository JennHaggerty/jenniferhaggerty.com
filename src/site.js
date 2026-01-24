import EmailIcon from "../app/components/svgs/email.js";
import ResumeIcon from "../app/components/svgs/resume.js";
import GithubIcon from "../app/components/svgs/github.js";
import RssIcon from "../app/components/svgs/rss.js";
import LinkedInIcon from "../app/components/svgs/linkedin.js";

export const site = {
  maxWidthClassname: "max-w-[1299px] mx-auto",
  adminEmail: "thejenniferhaggerty@gmail.com",
  name: "Jennifer Haggerty",
  tagline: "Full-stack Developer",
  location: "Augusta, GA",
  copyright: "Copyright © {{year}} Jennifer Haggerty.",
  font: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap",
  description: "Interface and front end developer.",
  homepageHeader: (
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
      id: "portfolio",
      customClass: "text-nav",
      items: [
        {
          href: "/",
          content: "Home",
        },
        {
          href: "/portfolio",
          content: "Portfolio",
        },
        {
          href: "/connect",
          content: "Connect",
        },
      ]
    },
    {
      id: "links",
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
      id: "links-with-icons",
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
      thumbnailImg: "images/thumbnails/paulaschoice.png",
      featuredImg: "images/featured/paulas-choice-featured.png",
      imageAlt: "",
      href: "https://www.paulaschoice.com",
      rel: "external",
      target: "_blank",
      title: "Paula's Choice",
      date: "2023-2024",
      tagline: "Interface Developer",
      results: ["53.6% Conversion Rate Increase", "7.8% Reduced Abandoned Carts", "62.5% Reduced Abandoned Checkouts"],
      tools: [(<a href="https://www.salesforce.com/commerce/" target="_blank" rel="external">Salesforce Commerce Cloud</a>), "React", "Headless CMS", "Typescript"],
      content: (<div>
        <blockquote cite="https://www.paulaschoice.com/who-we-are/about-us">
          <p>The beauty industry is dominated by misinformation--we cut through the noise & explain the research, empowering you to make educated skin care decisions.</p>
        </blockquote>
        <p>—Paula's Choice, <cite>About Us</cite></p>
        <p>Supplmenting the Paula's Choice development team, we built branded interfaces and admin dashboards on a headless commerce/content management system with <a href="https://www.salesforce.com/commerce/" target="_blank" rel="external">Salesforce Commerce Cloud</a>.</p>
     
        <blockquote cite="https://www.cqlcorp.com/work/paulas-choice/">
          <p>As a result of CQL’s UX Audit, CRO recommendations, and front-end development enhancements, PaulasChoice.com generated a 53.6% increase in conversion rates year-over-year, reduced abandoned carts by 7.8%, and reduced abandoned checkouts by 62.5%! With Paula’s Choice, shoppers can enjoy the best of both worlds – effective, research-based skincare products and effective, research-based online user experiences that build brand loyalty and produce glowing results.</p>
        </blockquote>
        <p>—CQL, <cite>Salesforce Commerce Cloud Case Study: Paula's Choice</cite></p>
      </div>),
      location: "Remote",
    },
    {
      thumbnailImg: "images/thumbnails/denon.png",
      featuredImg: "images/featured/denon.webp",
      imageAlt: "",
      href: "https://www.denon.com/en-us/",
      rel: "external",
      target: "_blank",
      title: "Denon",
      date: "2023",
      tagline: "Salesforce Commerce Cloud Front End Developer",
      tools: [(<a href="https://www.salesforce.com/commerce/" target="_blank" rel="external">Salesforce Commerce Cloud</a>), "Einstein AI", "Klaviyo", "Narvar"],
      content: (<div>
        <blockquote cite="https://www.denon.com/en-us/our-story.html">
          <p>Denon has been building, breaking, pushing, and inventing audio milestones for over a century. It's the backing behind the signature vivid and spacious sound.</p>
        </blockquote>
        <p>—Denon, <cite>The story of Denon</cite></p>
        <blockquote cite="https://www.cqlcorp.com/work/denon/">
          <p>Using Salesforce Commerce Cloud as the ecommerce platform, CQL established a common framework that could be leveraged across all of Masimo’s brands while allowing brands the flexibility to keep their own identity and experiences. Denon launched as the first brand on the unified ecosystem, with a bespoke modernized design, intuitive industry-best D2C experiences, and 4 locales (US, CA, EU, and UK).</p>
          <p>Denon’s new website drives user engagement and interaction, building a stronger connection between the Denon brand and the A/V experiences that people love. With improved navigation & product understanding, a focus on next-gen products, streamlined PDP & conversion funnels, and enhanced storytelling, Denon continues its legacy of innovation and sets a new standard of excellence for Masimo.</p>
        </blockquote>
        <p>—CQL, <cite>Salesforce Commerce Cloud Case Study: Denon</cite></p>
      </div>),
      location: "Remote",
    },
    {
      thumbnailImg: "images/thumbnails/masimo.png",
      featuredImg: "images/featured/masimo.png",
      imageAlt: "",
      href: "https://www.masimo.com",
      rel: "external",
      target: "_blank",
      title: "Masimo",
      date: "2023",
      tagline: "Front End Developer",
      tools: ["Shopify", "Liquid", "PHP"],
      content: (<div>
        <blockquote cite="https://www.masimo.com/company/about/">
          <p>For over 35 years, Masimo has developed innovative monitoring technologies designed to improve patient outcomes and streamline clinical workflows.</p>
          <p>From the NICU to the operating room to the home, our solutions empower clinicians to act with clarity and confidence—when and where it matters most.</p>
        </blockquote>
        <p>—Masimo, <cite>Empowering Clinicians. Transforming Care.</cite></p>
      </div>),
      location: "Remote",
    },
    {
      thumbnailImg: "images/thumbnails/onesource.png",
      featuredImg: "images/featured/onesource.webp",
      imageAlt: "",
      href: "https://www.onesourcesupplyco.com",
      rel: "external",
      target: "_blank",
      title: "OneSource",
      date: "2024",
      tagline: "Shopify",
      tools: ["Shopify"],
      content: "",
      location: "Remote",
    },
    {
      thumbnailImg: "images/thumbnails/taxslayer.png",
      featuredImg: "images/featured/taxslayer.png",
      imageAlt: "",
      href: "https://www.taxslayer.com",
      rel: "external",
      target: "_blank",
      title: "TaxSlayer",
      date: "2021-2022",
      tagline: "C#/ASP.NET, React.js",
      tools: [".NET", "C#", "React"],
      content: "",
      location: "Augusta, GA",
    },
    {
      thumbnailImg: "images/thumbnails/psychedelicart.png",
      featuredImg: "images/featured/concertpostergallery.webp",
      imageAlt: "",
      href: "https://www.concertpostergallery.com",
      rel: "external",
      target: "_blank",
      title: "Psychedelic Art",
      date: "'19-'20",
      tagline: "Shopify",
      tools: ["Shopify", "PHP", "Liquid"],
      content: "",
      location: "Remote",
    },
    {
      thumbnailImg: "images/thumbnails/gocollect.png",
      featuredImg: "images/featured/gocollect.jpg",
      imageAlt: "",
      href: "https://www.gocollect.com",
      rel: "external",
      target: "_blank",
      title: "GoCollect",
      date: "'19-'20",
      tagline: "PHP/Symfony",
      tools: ["PHP", "Symfony", "Shopify"],
      content: "",
      location: "Charlotte, NC",
    },
    {
      thumbnailImg: "images/thumbnails/fastgrowingtrees.png",
      featuredImg: "images/featured/fgt.jpg",
      imageAlt: "",
      href: "https://www.fast-growing-trees.com",
      rel: "external",
      target: "_blank",
      title: "Fast Growing Trees",
      date: "2018-2019",
      tagline: "Shopify",
      tools: ["Shopify", "React", "PHP", "Jira", "Bitbucket", "Trello", "Wordpress"],
      content: "",
      location: "Fort Mill, SC",
    },
    {
      thumbnailImg: "images/thumbnails/studiovonjenn.png",
      featuredImg: "images/featured/studiovonjenn.png",
      imageAlt: "",
      href: "https://www.studiovonjenn.com",
      rel: "external",
      target: "_blank",
      title: "Studio von Jenn",
      date: "'25",
      tagline: "Fine Art Portrait Photographer in Augusta, GA",
      tools: ["NextJS", "NoSQL", "React", "Typescript", "TailwindCSS"],
      content: "",
      location: "Augusta, GA",
      isPersonalProject: true,
    },
  ],
};
