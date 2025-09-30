import { strings } from "../../strings";

const Footer = () => {
  return (
    <footer>
      <p className="h4">{strings.copyright}</p>
      <p className="h5">{strings.yearEdited}</p>
    </footer>
  );
};

export default Footer;
