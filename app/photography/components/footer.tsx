import { settings } from "../site/site";

const Footer = () => {
  return (
    <footer className="outline">
      <div className="flex flex-col w-full max-w-[var(--max-width)] mx-auto py-1">
        <p className="h3">{settings.name}</p>
        <p>{settings.description}</p>
        <p>{settings.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
