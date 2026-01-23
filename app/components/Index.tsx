"use client";

import { site } from "@/src/site.js";
import Section from "./Section.tsx";
import Portfolio from "./Portfolio.tsx";
import { strings } from "@/src/strings.js";

const Index = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 my-20 md:my-40 gap-3 md:gap-8">
        <div className="m-auto w-full">
          <p className="h1">{site.name}</p>
          <h1 className="h2 w-full!">{site.tagline}</h1>
        </div>
        <div className="m-auto">{site.homepageHeader}</div>
      </div>
      <Section>
        <Portfolio
          heading={<h2 className="w-full! mb-2!">{strings.portfolio}</h2>}
        />
      </Section>
    </>
  );
};

export default Index;
