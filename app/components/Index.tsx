"use client";

import { site } from "@/src/site";
import Section from "./Section";
import Portfolio from "./Portfolio";
import { strings } from "@/src/strings";

const Index = () => {
  return (
    <>
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
        <Portfolio
          heading={<h2 className="w-full! mb-2!">{strings.portfolio}</h2>}
        />
      </Section>
    </>
  );
};

export default Index;
