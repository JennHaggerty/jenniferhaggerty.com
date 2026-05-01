"use client";

import { site } from "../src/site";
import Portfolio from "./Portfolio";
import Nav from "./Nav";
import { strings } from "../src/strings";

const tagline = site.description;
const about = site.meta.metaAbout;
const iconMenu = site.menus.find((x) => x.id === "links-with-icons");
const horizontalPadding = "px-3! lg:px-8!";
const verticalPadding = "py-5 md:py-12!";
const padding = horizontalPadding + " " + verticalPadding;

const Index = () => {
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
            src={`/images/featured-in-tech.jpg`}
            alt=""
          />
          <div className="mobile-title mt-[-13%]">{headings()}</div>
        </div>

        <div className={padding}>
          <div className="mb-5">
            <h3>{strings.about}</h3>
            <p>{about}</p>
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
