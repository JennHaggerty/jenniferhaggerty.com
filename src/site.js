import EmailIcon from "../app/components/svgs/email";
import ResumeIcon from "../app/components/svgs/resume";
import GithubIcon from "../app/components/svgs/github";
import RssIcon from "../app/components/svgs/rss";
import LinkedInIcon from "../app/components/svgs/linkedin";

export const site = {
  maxWidthClassname: "max-w-[1299px] mx-auto",
  adminEmail: "thejenniferhaggerty@gmail.com",
  name: "Jennifer Haggerty",
  title: "Senior Remote React Developer",
  description: "React • TypeScript • Next.js • API Architecture • Cloud Systems • SEO Optimization",
  location: "Augusta, GA",
  copyright: "Copyright © {{year}} Jennifer Haggerty.",
  font: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap",
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
          href: "/contact",
          content: "Contact",
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
          href: "/resume/jenniferhaggerty_resume.pdf",
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
          href: "/resume/jenniferhaggerty_resume.pdf",
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
      title: "Primary Expertise (React Stack)",
      content: "React, TypeScript, JavaScript (ES6+), Next.js, Component Libraries, Hooks, Context API, State Management, Reusable UI Systems, Design Systems, Headless CMS, Micro-Frontend Concepts",
    },
    {
      title: "Frontend Engineering",
      content:
        "HTML5, CSS3, TailwindCSS, Bootstrap, Material UI, Responsive Design, Mobile-First Design, Progressive Web Apps (PWA), Accessibility (WCAG/ADA), Performance Optimization",
    },
    {
      title: "Backend & APIs",
      content: "Node.js, REST APIs, GraphQL, PHP (Symfony), C#, .NET MVC, Web API, Microservices ArchitectureNode.js, REST APIs, GraphQL, PHP (Symfony), C#, .NET MVC, Web API, Microservices Architecture",
    },
    {
      title: "Cloud & DevOps",
      content: "AWS (S3, Lambda), Docker, CI/CD Pipelines, Azure DevOps, GitHub Actions, GitLab CI",
    },
    {
      title: "Databases",
      content: "MySQL, MSSQL, MongoDB, MariaDB, SQL Optimization",
    },
    {
      title: "Remote Collaboration Tools",
      content:
        "GitHub, GitLab, Azure DevOps, Jira, Confluence, Slack, Zoom, Figma, Notion",
    },
    {
      title: "SEO & Performance",
      content:
        "Technical SEO, Core Web Vitals, Page Speed Optimization, Indexing Optimization, Schema Markup, Structured Data, Analytics Integration, Conversion Optimization",
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
        <h3>About the client</h3>

        <blockquote cite="https://www.paulaschoice.com/who-we-are/about-us">
          <p>The beauty industry is dominated by misinformation--we cut through the noise & explain the 
            research, empowering you to make educated skin care decisions.
          </p>
        </blockquote>
        <p>—Paula's Choice, <cite>About Us</cite></p>

        <p>
          Paula's Choice has been dominating the skincare space since 1995. I found out about the company 
          in 2010 on a Reddit forum raving about their 
          <a href="https://www.paulaschoice.com/skin-perfecting-2pct-bha-liquid-exfoliant/201.html">
            BHA Liquid Exfoliant
          </a>. 
          It was a lovely surprise to find them a client of CQL and a dream to be appointed to the team!
        </p>

        <h3>The Work</h3>

        <p>
          Supplementing the Paula's Choice development team, I built branded interfaces and admin 
          dashboards on a headless commerce/content management system with 
          <a href="https://www.salesforce.com/commerce/" target="_blank" rel="external">Salesforce 
          Commerce Cloud</a> using React and TypeScript. 

          Customer rewards and campaign call-to-actions were placed on the product, checkout, and 
          index pages integrating with Google Optimize and Analytics for A/B testing driving 
          data-driven decision-making and customer segmentation strategies. 
          Enhanced web and mobile accessibility and addressed critical ADA compliance issues in HTML and CSS3.
        </p>

        <h3>From the employer</h3>
     
        <blockquote cite="https://www.cqlcorp.com/work/paulas-choice/">
          <p>As a result of CQL’s UX Audit, CRO recommendations, and front-end development enhancements, PaulasChoice.com 
            generated a 53.6% increase in conversion rates year-over-year, reduced abandoned carts by 7.8%, and reduced 
            abandoned checkouts by 62.5%! With Paula’s Choice, shoppers can enjoy the best of both worlds – effective, 
            research-based skincare products and effective, research-based online user experiences that build brand loyalty 
            and produce glowing results.</p>
        </blockquote>
        <p><a href="https://www.cqlcorp.com/work/paulas-choice/">—CQL, <cite>Salesforce Commerce Cloud Case Study: Paula's Choice</cite></a></p>
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
      tools: [(<a href="https://www.salesforce.com/commerce/" target="_blank" rel="external">Salesforce Commerce Cloud</a>), (<a href="https://www.salesforce.com/artificial-intelligence/">Einstein AI</a>), "Klaviyo", "Narvar"],
      content: (<div>
        <h3>About the client</h3>
        <blockquote cite="https://www.denon.com/en-us/our-story.html">
          <p>Denon has been building, breaking, pushing, and inventing audio milestones for over a century. It's the backing behind the signature vivid and spacious sound.</p>
        </blockquote>
        <p>—Denon, <cite>The story of Denon</cite></p>

        <h3>The work</h3>
        <p>
          Following designer provided Figma comps I built HTML/CSS components and product page customizations to be consumed 
          by Salesforce via XML. Einstein AI product recommendations were stylized and customized per customer segment. Navar provided excellent
          followup for building out a full sound  experience.
        </p>

        <h3>From the employer</h3>
        <blockquote cite="https://www.cqlcorp.com/work/denon/">
          <p>Using Salesforce Commerce Cloud as the ecommerce platform, CQL established a common framework that could be leveraged across all of Masimo’s brands while allowing brands the flexibility to keep their own identity and experiences. Denon launched as the first brand on the unified ecosystem, with a bespoke modernized design, intuitive industry-best D2C experiences, and 4 locales (US, CA, EU, and UK).</p>
          <p>Denon’s new website drives user engagement and interaction, building a stronger connection between the Denon brand and the A/V experiences that people love. With improved navigation & product understanding, a focus on next-gen products, streamlined PDP & conversion funnels, and enhanced storytelling, Denon continues its legacy of innovation and sets a new standard of excellence for Masimo.</p>
        </blockquote>
        <p><a href="https://www.cqlcorp.com/work/denon/">—CQL, <cite>Salesforce Commerce Cloud Case Study: Denon</cite></a></p>
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
      tools: [(<a href="https://www.shopify.com">Shopify</a>), "Liquid", "PHP"],
      content: (<div>
        <h3>About the client</h3>
        <blockquote cite="https://www.masimo.com/company/about/">
          <p>For over 35 years, Masimo has developed innovative monitoring technologies designed to improve patient outcomes and streamline clinical workflows.</p>
          <p>From the NICU to the operating room to the home, our solutions empower clinicians to act with clarity and confidence—when and where it matters most.</p>
        </blockquote>
        <p>—Masimo, <cite>Empowering Clinicians. Transforming Care.</cite></p>

        <h3>The Work</h3>
        <p>
          While at CQL Corp, we established a Shopify presence for Masimo's medical wearables. 
          I built pages and page components using PHP and Liquid within the Shopify space.
        </p>
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
      tagline: "Shopify Developer",
      tools: [(<a href="https://www.shopify.com">Shopify</a>), "Liquid", "PHP"],
      content: (<div>
        <h3>About the client</h3>
        <blockquote cite="https://www.linkedin.com/company/one-source-supply-llc/about/">
          <p>One Source Supply supplies Electrical Supplies, Paint Supplies, Paint Sundries , Seasonal Supplies, Janitorial Supplies, Plastic Bags, Plumbing, Hardware supplies and many Specialty Items. We have an extensive list of suppliers and we have access to the best equipment at extremely competitive prices.  For anything you need for your building maintenance and supply, One Source Supply is the business partner for you to ensure that you get exactly what you need when you need it.</p>
        </blockquote>
        <p>—One Source Supply LLC</p>

        <h3>About the work</h3>
        <p>
          While at <a href="https://www.cqlcorp.com/">CQL Corp</a>, we established a Shopify presence for OneSource. 
          Overall site was themed to adhere to brand guidelines and restricted CSS inline injections to maintain site cohesiveness. 
          The product display page saw larger featured, gallery, and thumbnails images with an intense zoom to capture the finer details. 
          Variant rules were applied with CSS and PHP with Liquid to highlight special assets and product variant sales.
        </p>
      </div>),
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
      tagline: "Frontend Developer",
      tools: [(<a href="https://dotnet.microsoft.com/en-us/apps/aspnet/mvc">ASP.NET MVC</a>), "C#", "React"],
      content: (<div>
        <h3>About the company</h3>
        <blockquote cite="https://www.linkedin.com/company/taxslayerllc/">
          <p>For 60 years, TaxSlayer has been empowering Americans to take control of their taxes with easy-to-use, reliable software backed by U.S.-based support. Whether you're filing a simple return or managing self-employed income, TaxSlayer empowers you with the tools to file confidently and get your maximum refund guaranteed.</p>
        </blockquote>
        <p>—TaxSlayer</p>

        <h3>About the work</h3>
        <p>
          I really enjoyed my work at TaxSlayer Refactoring ASP.NET front-end components into React and maintaining our commercial
          and professional frontend codebases --we were in the process of converting to a single repository with separate theme support. 
          I helped implement Redux state management with actions and reducers for state and federal personal and professional tax filing, 
          made yearly campaign updates with designer provided comps,
          and participated in daily stand-ups and bi-weekly grooming sessions where developers discussed the work to be done, 
          detailed tickets with steps for success, links to supporting tools or areas of the codebase to reference, 
          and designer provided assets and detailed implementation specifications.
          We had thorough code reviews and an open environment for learning and asking questions within the department and our neighboring 
          department, <a target="_blank" href="https://www.taxslayerpro.com/">the Pro team</a>.
        </p>
        <p></p>
      </div>),
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
      tagline: "Shopify Developer",
      tools: ["Shopify", "PHP", "Liquid"],
      content: (<div>
        <h3>About the client</h3>
        <blockquote cite="https://concertpostergallery.com/pages/about-pae">
          <p>
            Psychedelic Art Exchange is the premier source to buy, sell, and learn about vintage concert posters. 
            We are a full service organization that provides sophisticated collectors like yourself with everything you need
              to take maximum advantage of what a growing number of people believe is the most lucrative collectibles opportunity in
              the world today.
          </p>
        </blockquote>
        <p>—Psychedelic Art Exchange</p>

        <h3>The Work</h3>
        <p>
          While I was with <a target="_blank" href="https://www.gocollect.com">GoCollect in Charlotte, NC</a> I developed inventory import and management apps within Shopify for PAE.
            I flew to Baltimore to observe and document their complex inventory and inventory management system, theirs desires
            for the app we were developing, and pain points within their current system and things they'd like to avoid within the new.
          Working with the senior developer, directly under the CEO, PHP and Liquid I spearheaded PAE's transition from a static HTML/CSS
            website into a <a target="_blank" href="https://www.shopify.com">Shopify</a> store with an inventory import app that interacted with PAE's auctioning platform.
        </p>
      </div>),
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
      tagline: "Integrations Specialist",
      tools: ["PHP", "Symfony", "Shopify"],
      content: (<div>
        <h3>About the Company</h3>
        <blockquote cite="https://www.linkedin.com/company/gocollect/">
          <p>GoCollect equips collectors with the tools they need to make sound buying and selling decisions in an ever-changing market. We monitor, organize and report on thousands of daily comic book sales across various online marketplaces; tracking values using several factors including condition, grading types, variants, printings and more. Just launched - concert poster price guide. This initial preview will monitor the sales of CGC-graded concert posters from select partners</p>
        </blockquote>
        <p>—GoCollect</p>

        <h3>As a Junior Software Engineer</h3>
        <p>
          I began at GoCollect in PHP on a Symfony framework. Alongside the senior developer and Marketing
           Manager I created web forms, pages, and product pages for comic book collectibles. We created dashboards with the eBay API on product listings
           and sales history. With proprietary software created by the CEO, we maintained and enhanced a collection price guide for the collectors.
        </p>

        <h3>In Platform Integrations</h3>
        <p>
          GoCollect then stepped into the Shopify space with a company swag shop and began building the foundation for our team to develop in the app store.
          Working with clients like <a  href="https://noblenostalgia.com/">Noble Nostalgia</a> --a comics and collectibles shop in Simpsonville, SC, 
          and <a href="https://www.concertpostergallery.com">Psychedelic Art Exchange</a> --concert posters in auction and ready to purchase formats, 
          the senior developer and I created Shopify websites with branded theming in Liquid with PHP, and custom apps tailored for the collectible 
          product and importing custom CMS data structures.
        </p>

        <h3>Bonus Content</h3>
        <p>I was a YouTube host for a <span className="italic">very brief period</span>.</p>
      </div>),
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
      tagline: "Software Engineer",
      tools: ["Shopify", "React", "PHP", "Jira", "Bitbucket", "Trello", "Wordpress"],
      content: (<div>
        <h3>From the company</h3>
        <blockquote cite="https://www.linkedin.com/company/fastgrowingtrees/">
          <p>Fast Growing Trees is America’s local nursery. We deliver outdoor plants guaranteed to thrive, for everyone who wants a better yard. </p>
          </blockquote>
        <p>—Fast Growing Trees</p>

        <h3>About the Work</h3>
        <p>
          When I joined Fast Growing Trees the development team was refactoring legacy WordPress to Shopify and it was an amazing experience 
           learning about plants, their attributes, and the growing zones --I took to collecting plants immediately! I created CSS stylesheet with
           brand theming and triaged conflicts with legacy classes. At the request of administration and using javascript, I created an inventory
           report script that would email administration with critically low stock. The script calculated the growth rate of the current inventory and
           flagged options for replenishment making it especially useful when we experience delays in restock.
        </p>
      </div>),
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
      tagline: "Web Developer and Photographer",
      tools: ["NextJS", "NoSQL", "React", "Typescript", "TailwindCSS"],
      content: (<div>
        <h3>Origin Story</h3>
        <p>
          I began styling with HTML and CSS on MySpace in 2004 and theming Blogger and AngelFire sites when I purchased my first laptop in 2006. 
          My education began with a year at Carolina Technical College in 2007 where I learned how to developed websites and newsletters with 
          <a href="https://www.adobe.com/products/dreamweaver.html">Adobe Dreamweaver</a> and content/contact management with Microsoft Access 
          and MySQL. In 2008 I was accepted at the <a href="https://sc.edu/">University of South Carolina</a> into the Studio Arts program.
          I knew I would need an online portfolio and built a LAMP stack hosting WordPress to support my artwork and create an online voice
          with a blog and found my name, www.jenniferhaggerty.com, to be available as a domain. It used to host my artworks until I realized that my passion was in building and maintaining the website rather than generating
          content. My love for photography remains very much alive and is reflected in another self-developed website, 
          <a href="https://www.studiovonjenn.com" target="_blank">Studio von Jenn</a>.
        </p>
        <p>
          The website you are reading this on has seen <b>many</b> makeovers in the front and back end as I experimented and learned new tools and 
          frameworks. I dropped WordPress when I wasn't maintaining the blog and commerce sections and React showed up <b>heavy</b> on the development 
          scene. Now it uses NextJS in the backend, React with TypeScript in the front and I brought in TailwindCSS for fast styling.
        </p>
      </div>),
      location: "Augusta, GA",
      isPersonalProject: true,
    },
  ],
  experience: [
    {
      role: "Senior Remote React Developer / Full Stack Engineer",
      client: "Freelance",
      date: "January 2024 – Present",
      location: "Remote",
      content: `Architect and deliver React and Next.js applications for
                distributed teams using modern component-based architectures.
                Build scalable, SEO-optimized frontend platforms with
                performance-first engineering principles. Design reusable UI
                libraries and shared component systems for multi-project
                environments. Integrate REST and GraphQL APIs for real-time
                data-driven applications. Implement analytics, monitoring, and
                performance tracking systems for remote product teams. Lead
                accessibility compliance (WCAG/ADA) initiatives across
                enterprise platforms. Produce system documentation and developer
                standards for remote engineering teams.`
    },
    {
      role: "Interface Developer",
      client: "CQL Corp",
      date: "January 2023 – December 2024",
      location: "Remote",
      content: `Developed enterprise React + TypeScript platforms in a headless
                CMS environment. Built reusable component libraries and scalable
                UI architectures for large distributed teams. Integrated
                Salesforce and analytics systems supporting global user
                platforms. Implemented accessibility-first frontend engineering
                standards. Delivered modular frontend systems supporting
                enterprise scalability and maintainability.`
    },
    {
      role: "Front End Engineer",
      client: "TaxSlayer",
      date: "September 2021 – December 2022",
      location: "Hybrid",
      content: ` Built production-grade React applications integrated with .NET
                MVC backends. Developed high-performance UI systems for
                enterprise financial platforms. Collaborated with remote
                cross-functional teams using Agile/Scrum methodologies.
                Delivered secure, scalable, and maintainable frontend solutions.`
    },
    {
      role: "Platform Specialist",
      client: "GoCollect LLC",
      date: "March 2019 – April 2020",
      location: "Charlotte, NC",
      content: `Built React + Node.js applications for internal platforms.
                Designed API-driven systems using GraphQL and REST
                architectures. Deployed cloud services using AWS (S3, Lambda).
                Automated infrastructure with Docker and Ansible for distributed
                teams.`
    },
    {
      role: "Software Engineer",
      client: "Fast Growing Trees",
      date: "January 2018 – February 2019",
      location: "Fort Mills, SC",
      content: `Migrated legacy systems to React + TypeScript modern
                architectures. Built SQL-driven data platforms and reporting
                dashboards. Modernized frontend systems for performance and
                scalability.`
    },
    {
      role: "Web Design & Systems Administration",
      client: "Digital Derm Inc.",
      date: "November 2015 – December 2017",
      location: "Remote",
      content: `Migrated platforms to AWS cloud infrastructure. Built
                SEO-optimized WordPress and React-based frontend systems.
                Delivered responsive, mobile-first, performance-optimized web
                platforms.`
    },
  ],
  meta: {
    metaTitle: "Jennifer Haggerty | Senior Remote React Developer",
    metaDescription: "Senior Remote React Developer specializing in React, TypeScript, Next.js, scalable frontend architecture, cloud systems, and SEO-optimized web platforms for distributed teams.",
    name: "Jennifer Haggerty",
    title: "Senior Remote React Developer",
    secondaryTitles: ["Frontend Architect", "Full Stack Engineer (React-first)", "Enterprise UI Engineer"],
    brandStatement: "Senior Remote React Developer specializing in scalable frontend architecture, enterprise-grade UI systems, and API-driven platforms for distributed teams.",
    valueProposition: "I help remote-first companies build scalable, high-performance React platforms that are fast, accessible, search-optimized, and built to scale globally.",
    description: "Senior Full Stack React Developer specializing in scalable web applications, SEO optimization, enterprise platforms, React, TypeScript, .NET, cloud infrastructure, and high-performance digital systems. Expert in technical SEO, accessibility compliance, and modern web architecture.",
    primaryKeywords: "Senior Full Stack Developer, React Developer, SEO Developer, Technical SEO Engineer, Enterprise Web Developer, Cloud Developer, API Developer, Performance Engineer",
    technologyKeywords: "React, TypeScript, JavaScript, Next.js, C#, .NET MVC, Node.js, PHP, REST APIs, GraphQL, AWS, Docker, CI/CD, Microservices, Headless CMS",
    seoKeywords: "Technical SEO, On-Page SEO, Core Web Vitals, Page Speed Optimization, Structured Data, Schema Markup, Indexing Optimization, Crawlability, Mobile SEO, Accessibility SEO",
    atsSeoKeywords: "Remote React Developer, Senior React Engineer, Frontend Engineer, Full Stack Developer, JavaScript Developer, TypeScript Developer, Next.js Developer, React Architect, Remote Software Engineer, Cloud Developer, API Engineer, Enterprise Web Developer, SEO Developer, Technical SEO Engineer, Performance Engineer, Headless CMS Developer, Distributed Teams, Remote Engineering"
  }
};
