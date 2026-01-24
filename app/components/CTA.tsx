import { site } from "../../src/site.js";

const CTA = () => {
  return (
    <div className="h2 w-full! m-0! align-center">
      <span>Ready to get connected?</span>
      <a
        href={`mailto:${site.adminEmail}`}
        className=" block! text-2xl! text-center align-center m-auto"
      >
        <span className=" tracking-normal">Let's go!</span>
      </a>
    </div>
  );
};

export default CTA;
