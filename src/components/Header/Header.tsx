interface Props {
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  banner?: boolean; // true if not in main/article/aside/nav/section
}

const Header = (props: Props) => {
  const { children, banner, ariaLabel, ariaLabelledBy } = props;

  return (
    <header
      aria-label={banner ? "" : ariaLabel}
      aria-labelledby={banner ? "" : ariaLabelledBy}
    >
      {children}
    </header>
  );
};

export default Header;
