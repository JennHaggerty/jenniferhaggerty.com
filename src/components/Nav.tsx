interface Item {
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
  items?: Item[];
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
          <button
            className={`rounded-none ${
              iconOnly || item.iconOnly ? "icon" : " py-3!"
            }`}
            aria-label={item.ariaLabel}
            onClick={item.onClick}
          >
            {item.content}
          </button>
        )}
        {item.href && (
          <a
            href={item.href}
            aria-label={item.ariaLabel}
            rel={item.rel}
            target={item.target}
            className={`${iconOnly || item.iconOnly ? "icon" : "text-xl! py-3!"}`}
          >
            {item.content}
          </a>
        )}
      </li>
    ));
  };

  return (
    <nav aria-labelledby={id} aria-live={ariaLive}>
      <ul id={id} aria-label={ariaLabel} className={customClassname}>
        {renderNavItems()}
      </ul>
    </nav>
  );
};

export default Nav;
