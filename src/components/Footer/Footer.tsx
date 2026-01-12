import { site } from "../../site";

const Footer = () => {
  return (
    <footer>
      <p className="h4 mt-5!">
        {site.copyright.replace(
          "{{year}}",
          new Date().getFullYear().toString(),
        )}
      </p>
    </footer>
  );
};

export default Footer;
