"use client";

import { site } from "@/src/site";
import Section from "./Section";
import Portfolio from "./Portfolio";

const Index = () => {
  return (
    <div
      className={`${site.maxWidthClassname} w-full m-auto px-3 md:px-0 min-h-screen align-center`}
    >
      <Section customClass="flex bg-white p-8">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 m-auto">
          <div className="mb-3! md:mb-0 md:m-auto w-full">
            <h1 className="lg:mx-auto!">{site.name}</h1>
            <h2>{site.tagline}</h2>
          </div>
          <div className="md:m-auto">{site.homepageHeader}</div>
        </div>
      </Section>
      <Section>
        <Portfolio />
      </Section>
    </div>
  );
};

export default Index;
