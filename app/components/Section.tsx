interface Props {
  children: React.ReactNode;
  customClass?: string;
}

const Section = (props: Props) => {
  const { children, customClass } = props;

  const fullClass = `my-[var(--section-vertical-margin)] ${customClass ? customClass : ""}`;

  return <section className={fullClass}>{children}</section>;
};

export default Section;
