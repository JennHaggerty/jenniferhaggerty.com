import { site } from "@/src/site";

interface MenuItem {
  content: React.ReactNode;
  ariaLabel?: string;
  ariaLive?: "off" | "assertive" | "polite" | undefined;
  rel?: string;
  target?: string;
  href?: string;
  iconOnly?: boolean;
  onClick?: () => void;
}

interface Props {
  items?: MenuItem[];
  ariaLabel?: string;
  ariaLive?: "off" | "assertive" | "polite" | undefined;
  iconOnly?: boolean;
  customClassname?: string;
  id?: string;
}

const Nav = (props: Props) => {
  const { items, id, customClassname, ariaLabel, iconOnly, ariaLive } = props;

  const renderNavItems = () => {
    if (!items) return;

    return items.map((item, i) => (
      <li key={id + "-" + i}>
        {item.onClick && (
          <button aria-label={item.ariaLabel} onClick={item.onClick}>
            {item.content}
          </button>
        )}
        {item.href && (
          <a
            href={item.href}
            aria-label={item.ariaLabel}
            rel={item.rel}
            target={item.target}
          >
            {item.content}
          </a>
        )}
      </li>
    ));
  };

  return (
    <nav aria-labelledby={id} aria-live={ariaLive}>
      <ul
        id={id}
        aria-label={ariaLabel}
        className={`${customClassname} ${site.maxWidthClassname}`}
      >
        {renderNavItems()}
      </ul>
    </nav>
  );
};

export default Nav;
