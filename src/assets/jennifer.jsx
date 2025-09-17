
export const site = {
  "name": "Jennifer Haggerty",
  "tagline":"Frontend / Interface Developer",
  "description": "I have enjoyed creating and maintaining user-centric, ADA compliant web applications for 10+ years.  I take a mobile-first code design approach that iOS and Android users may enjoy. My favorite tools are JavaScript, React, Next.js, TypeScript, SASS/SCSS, MySQL, and Github.",
  "menus": [
    {
      "id": "main",
      "location": "header",
      "items": [
        {
          "aria-label" : "Email Address",
          "href": "mailto:thejenniferhaggerty@gmail.com",
          "content": () => <EmailIcon />
        },
        {
          "aria-label": "Download Jennifer's resume",
          "href": "./assets/jennifer_haggerty_interface_developer.pdf",
          "content": () => <ResumeIcon />,
          "target": "_blank"
        },
        {
          "aria-label": "Github",
          "href": "https://jennhaggerty.github.io",
          "content": () => <GithubIcon />,
          "rel": "external",
          "target": "_blank"
        },
        {
          "aria-label": "Follow the blog",
          "href": "https://jennhaggerty.github.io",
          "content": () => <RssIcon />,
          "rel": "external",
          "target": "_blank"
        },
        {
          "aria-label": "LinkedIn",
          "href": "https://www.linkedin.com/in/jennifer-haggerty-01915556",
          "content": () => <Linked />,
          "rel": "external",
          "target": "_blank"
        }
      ]
    },
    {
      "id": "contact",
      "location": "footer",
      "items": [
        {
          "aria-label" : "Email Address",
          "href": "mailto:thejenniferhaggerty@gmail.com",
          "content": () => <EmailIcon />
        },
        {
          "aria-label": "Download Jennifer's resume",
          "href": "./assets/jennifer_haggerty_interface_developer.pdf",
          "content": () => <ResumeIcon />,
          "target": "_blank"
        },
        {
          "aria-label": "Github",
          "href": "https://jennhaggerty.github.io",
          "content": () => <GithubIcon />,
          "rel": "external",
          "target": "_blank"
        },
        {
          "aria-label": "Follow the blog",
          "href": "https://jennhaggerty.github.io",
          "content": () => <RssIcon />,
          "rel": "external",
          "target": "_blank"
        },
        {
          "aria-label": "LinkedIn",
          "href": "https://www.linkedin.com/in/jennifer-haggerty-01915556",
          "content": () => <Linked />,
          "rel": "external",
          "target": "_blank"
        }
      ]
    }
  ],
  "skills": [
    {
      "title": "Languages",
      "content": "HTML, CSS/SCSS, JavaScript, TypeScript, Java, C#, PHP"
    },
    {
      "title":"Frameworks",
      "content":"Next.js, Node.js, React, Vue, Angular, Bootstrap, HeroUI, MaterialUI"
    },
    {
      "title":"Platforms",
      "content":"SFCC, Shopify, Wordpress"
    },
    {
      "title":"Databases",
      "content":"MySQL, MariaDB, PostgreSQL, MongoDB"
    },
    {
      "title":"Testing",
      "content":"Puppeteer, Jest"
    },
    {
      "title":"Version Control",
      "content":"Github, Gitlab, Bitbucket, Azure Devops, Jira"
    },
    {
      "title":"Other",
      "content":"Docker, Vercel, Sketch, AWS, Figma, Adobe Creative Suite, VSCode, iTerm with Tmux"
    }
  ],
  "portfolio": [
    {
      "image-src": "./assets/thumbnails/paulaschoice.png",
      "image-alt": "Paula's Choice",
      "href": "https://www.denon.com/en-us/",
      "external": false,
      "target": "_blank",
      "title": "Paula's Choice",
      "date": "'23-'24",
      "tagline": "SFCC",
      "items": [
        "I did a thing",
        "I did another thing"
      ]
    },
    {
      "image-src": "./assets/thumbnails/denon.png",
      "image-alt": "Denon Premium Sound",
      "href": "https://www.myjobquest.io",
      "external": false,
      "target": "_blank",
      "title": "Denon",
      "date": "'23",
      "tagline": "Shopify",
      "items": [
        "I did a thing",
        "I did another thing"
      ]
    },
    {
      "image-src": "./assets/thumbnails/myjobquest.png",
      "image-alt": "MyJobQuest.io",
      "href": "https://www.paulaschoice.com",
      "external": false,
      "target": "_blank",
      "title": "MyJobQuest.io",
      "date": "'23-'24",
      "tagline": "Shopify",
      "items": [
        "I did a thing",
        "I did another thing"
      ]
    },
    {
      "image-src": "./assets/thumbnails/masimo.png",
      "image-alt": "Masimo Personal and Professional Health",
      "href": "https://www.masimo.com",
      "external": false,
      "target": "_blank",
      "title": "Masimo",
      "date": "'23",
      "tagline": "Shopify",
      "items": [
        "I did a thing",
        "I did another thing"
      ]
    },
    {
      "image-src": "./assets/thumbnails/onesource.png",
      "image-alt": "OneSource Supply",
      "href": "https://www.onesourcesupplyco.com",
      "external": false,
      "target": "_blank",
      "title": "OneSource",
      "date": "'24",
      "tagline": "Shopify",
      "items": [
        "I did a thing",
        "I did another thing"
      ]
    },
    {
      "image-src": "./assets/thumbnails/taxslayer.png",
      "image-alt": "TaxSlayer",
      "href": "https://www.taxslayer.com",
      "external": false,
      "target": "_blank",
      "title": "TaxSlayer",
      "date": "'21-'22",
      "tagline": "React/MVC",
      "items": [
        "I did a thing",
        "I did another thing"
      ]
    },
    {
      "image-src": "./assets/thumbnails/psychedelicart.png",
      "image-alt": "Psychedelic Art Exchange",
      "href": "https://www.concertpostergallery.com",
      "external": false,
      "target": "_blank",
      "title": "Psychedelic Art Exchange",
      "date": "'19",
      "tagline": "Shopify",
      "items": [
        "I did a thing",
        "I did another thing"
      ]
    },
    {
      "image-src": "./assets/thumbnails/gocollect.png",
      "image-alt": "GoCollect",
      "href": "https://www.gocollect.com",
      "external": false,
      "target": "_blank",
      "title": "GoCollect",
      "date": "'19-'20",
      "tagline": "Symfony"/PHP,
      "items": [
        "I did a thing",
        "I did another thing"
      ]
    },
    {
      "image-src": "./assets/thumbnails/fastgrowingtrees.png",
      "image-alt": "Fast Growing Trees",
      "href": "https://www.fast-growing-trees.com",
      "external": false,
      "target": "_blank",
      "title": "Fast Growing Trees",
      "date": "'18-'19",
      "tagline": "Shopify",
      "items": [
        "I did a thing",
        "I did another thing"
      ]
    },
  ],
  "copyright": "Copyright © {{year}}. Jennifer Haggerty. All rights reserved."
}
