interface Props {
  children: React.ReactNode;
  customClass?: string;
}

const Section = (props: Props) => {
  const { children, customClass } = props;

  const fullClass = `py-[40px] md:py-[60px]${customClass ? ` ${customClass}` : ""}`;

  return <div className={fullClass}>{children}</div>;
};

export default Section;
