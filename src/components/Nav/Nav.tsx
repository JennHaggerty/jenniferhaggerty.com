interface Item {
  content: React.ReactNode;
  ariaLabel?: string;
  rel?: string;
  target?: string;
  href?: string;
  onClick?: () => void;
}

interface Props {
  items?: Item[];
  ariaLabel?: string;
  customClassname?: string;
  id?: string;
}

const Nav = (props: Props) => {
  const { items, id, customClassname, ariaLabel } = props;

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
    <nav aria-labelledby={id} className={customClassname}>
      <ul id={id} aria-label={ariaLabel}>
        {renderNavItems()}
      </ul>
    </nav>
  );
};

export default Nav;
