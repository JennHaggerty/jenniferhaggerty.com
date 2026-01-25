import { site } from "../../src/site";

const CTA = () => {
  return (
    <div className="cta h2">
      <span>Ready to get connected?</span>
      <a href={`mailto:${site.adminEmail}`}>
        <span>Let's go!</span>
      </a>
    </div>
  );
};

export default CTA;
