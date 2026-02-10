"use client";

import { site } from "@/src/site";
import Section from "./Section";
import Portfolio from "./Portfolio";
import Nav from "./Nav";

const Index = () => {
  const iconMenu = site.menus.find((x) => x.id === "links-with-icons");
  const horizontalPadding = "px-3! lg:px-8!";
  const verticalPadding = "py-12!";
  const padding = horizontalPadding + " " + verticalPadding;

  return (
    <div className="portfolio-page bg-transparent!">
      <div className="bg-white">
        <div className="header">
          <div className="desktop-title">
            <h1>{site.name}</h1>
            <h2>{site.tagline}</h2>

            {iconMenu && (
              <Nav
                id={iconMenu.id}
                items={iconMenu.items}
                customClassname={`${iconMenu.customClass}`}
              />
            )}
          </div>
          <img
            src={`/images/featured.jpg`}
            alt="Portrait of Jennifer Haggerty"
          />
        </div>
        <div className="mobile-title">
          <h1>{site.name}</h1>
          <h2>{site.tagline}</h2>

          {iconMenu && (
            <Nav
              id={iconMenu.id}
              items={iconMenu.items}
              customClassname={`${iconMenu.customClass}`}
            />
          )}
        </div>

        <div className={padding}>
          <div>
            <h3>About me</h3>
            <div>
              <p>
                Hey there, my name is Jennifer Haggerty and I am a web and
                applications developer and I enjoy creating and maintaining
                user-centric solutions. My favorite tools are React, TypeScript,
                MongoDB, Next.js, TailwindCSS, and{" "}
                <a href="https://github.com/JennHaggerty">Github.</a>
              </p>
              <p>
                When I'm not at the computer I'm in the garden, at the park with
                my dogs, or volunteering at a local art show!
              </p>
            </div>
          </div>

          <div>
            <h3>Skills & Tools</h3>
            <div>
              <p>
                I've worked with many different technology stacks. Here's a
                comprehensive list.
              </p>
              <div className="p w-full! flex flex-wrap">
                {site.skills.map((skill, i) => (
                  <div key={`skill-${i}`} className="w-1/3 md:w-1/6 mb-2">
                    <span className="font-bold">{skill.title}</span>
                    <ul>
                      {skill.content.split(",").map((skillItem, j) => (
                        <li key={`skill-item-${j}`} className="leading-none">
                          {skillItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3>Experience</h3>
            <div>
              <p>
                Web Developer and Administration{" "}
                <span className="font-bold">@ Freelance</span>
                <br />
                <span className="text-xs!">January 2024 – Current</span>
                <br />
                Currently I generate e-commerce experiences for B2C vendors in
                Shopify, WordPress with WooCommerce, and SquareSpace in the arts
                and entertainment sector using PHP, React, Next.js, and
                JavaScript. Implement and monitor Google Analytics and Tag
                Manager on web events, generate reports on user interactivity
                and retention, strategize and develop SEO campaigns integrating
                with social media. Conduct site audits for ADA compliance and
                accessibility and provide documentation with solution
                instructions.
              </p>
              <p>
                Interface Developer{" "}
                <span className="font-bold">@ CQL Corp</span>
                <br />
                <span className="text-xs!">January 2023 – December 2024</span>
                <br />
                Developed custom React component libraries with TypeScript in a
                headless CMS. Leveraged Salesforce to enhance global loyalty
                programs and improve user engagement. Tailored Shopify Liquid
                themes using Figma designs to ensure seamless brand alignment,
                optimized user experience. Integrated Google A/B testing driving
                data-driven decision-making and customer segmentation
                strategies. Enhanced web and mobile accessibility by addressing
                critical ADA compliance issues in HTML and CSS3.
              </p>
              <p>
                Front End Engineer{" "}
                <span className="font-bold">@ TaxSlayer</span>
                <br />
                <span className="text-xs!">September 2021 – December 2022</span>
                <br />
                Ensured seamless functionality across individual and
                professional financial tax preparation applications. Modified
                C#, HTML/CSS, React, and JavaScript within .NET MVC applications
                to support annual marketing campaigns. Collaborated with
                designers to execute cohesive website and Pro software marketing
                campaigns using Figma assets. Participated in Agile
                methodologies, including daily stand-ups and bi-weekly grooming
                sessions.
              </p>
              <p>
                Platform Specialist{" "}
                <span className="font-bold">@ GoCollect LLC</span>
                <br />
                <span className="text-xs!">March 2019 – April 2020</span>
                <br />
                Developed and tested API integrations using PHP’s Symfony and
                GraphQL, ensuring robust and scalable solutions. Automated
                onboarding processes with Docker and Ansible, reducing manual
                effort and improving efficiency. Leveraged S3 and Lambda
                services reducing overhead and increasing scalability. Designed
                and implemented UI prototypes from wireframes, translating
                concepts into functional interfaces. Built an inventory
                application with Node.js and React, delivering a streamlined
                solution for inventory management. Authored comprehensive
                documentation for applications, onboarding processes, and code
                to support the team.
              </p>
              <p>
                Software Engineer{" "}
                <span className="font-bold">@ Fast Growing Trees</span>
                <br />
                <span className="text-xs!">January 2018 – February 2019</span>
                <br />
                Unified disparate PHP modules into a single cohesive system,
                improving maintainability and reducing complexity. Optimized
                operational costs by consolidating third-party e-commerce
                services, enhancing overall efficiency. Analyzed SQL data with
                PHP and styled outputs using CSS and jQuery to deliver
                actionable insights. Automated daily reporting processes using
                bash, JavaScript, MySQL, and MSSQL, increasing operational
                transparency. Migrated legacy assets to React with TypeScript
                for Shopify’s platform.
              </p>
              <p>
                Web Design and Administration{" "}
                <span className="font-bold">@ Digital Derm Inc.</span>
                <br />
                <span className="text-xs!">November 2015 – December 2017</span>
                <br />
                Migrated hosting services from GoDaddy to AWS, achieving
                significant cost savings and improved scalability. Converted
                static HTML/CSS websites into WordPress platforms, enabling
                in-house web and content administration. Adhered to HIPAA law
                and guidelines for internet security measures including MFA and
                encryption at REST. Designed responsive themes to enhance SEO
                rankings and improve user engagement across devices. Implemented
                modern web design practices to elevate the overall user
                experience and site performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Portfolio />
      </div>
    </div>
  );
};

export default Index;
