"use client";

import { site } from "@/src/site.js";
import Section from "./Section.tsx";
import Portfolio from "./Portfolio.tsx";
import { strings } from "@/src/strings.js";

const Index = () => {
  return (
    <>
      <div className="flex h-[50vh]">
        <div className="flex flex-col md:flex-row gap-0 md:gap-5 lg:gap-8 m-auto">
          <div className="md:m-auto w-full">
            <p className="h1">{site.name}</p>
            <h1 className="h2 w-full!">{site.tagline}</h1>
          </div>
          <div className="md:m-auto">{site.homepageHeader}</div>
        </div>
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
