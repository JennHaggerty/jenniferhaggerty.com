"use client";

import { site } from "@/src/site";
import Portfolio from "./Portfolio";
import Nav from "./Nav";
import { strings } from "@/src/strings";

const tagline =
  "React • TypeScript • Next.js • API Architecture • Cloud Systems • SEO Optimization";

const about = `
              I’m Jennifer Haggerty, a Senior Remote React Developer with 9+
              years of experience building scalable, enterprise-grade web
              platforms. I specialize in React-first architecture, API-driven
              systems, and performance-optimized frontend engineering for
              remote-first organizations.`;

const Index = () => {
  const iconMenu = site.menus.find((x) => x.id === "links-with-icons");
  const horizontalPadding = "px-3! lg:px-8!";
  const verticalPadding = "py-5 md:py-12!";
  const padding = horizontalPadding + " " + verticalPadding;

  const headings = () => (
    <>
      <h1>{site.name}</h1>
      <h2>{site.title}</h2>

      {iconMenu && (
        <Nav
          id={iconMenu.id}
          items={iconMenu.items}
          customClassname={`${iconMenu.customClass}`}
        />
      )}
      <p className="text-sm! text-center">{tagline}</p>
    </>
  );

  return (
    <>
      <div className="portfolio-page">
        <div className="header">
          <div className="desktop-title">{headings()}</div>
          <img
            className="h-full object-cover"
            src={`/images/featured.jpg`}
            alt="Portrait of Jennifer Haggerty"
          />
          <div className="mobile-title mt-[-13%]">{headings()}</div>
        </div>

        <div className={padding}>
          <div className="mb-5">
            <h3>{strings.about}</h3>
            <p>{about}</p>
          </div>

          <div className="mb-5">
            <h3>{strings.skills}</h3>
            <div className="p w-full! grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {site.skills.map((skill, i) => (
                <div
                  key={`skill-${i}`}
                  className="w-full border-2 p-3 rounded-sm"
                >
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

          <div className="mb-5">
            <h3>{strings.experience}</h3>
            <div>
              {site.experience.map((item, i) => (
                <p key={`item-${i}`}>
                  <span className="font-bold">
                    {item.client} — {item.role}
                  </span>
                  <br />
                  <span className="text-sm!">
                    {item.date} | {item.location}
                  </span>
                  <br />
                  {item.content}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Portfolio />
      </div>
    </>
  );
};

export default Index;
