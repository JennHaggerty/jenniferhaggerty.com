interface Props {
  children: React.ReactNode;
}

const Section = (props: Props) => {
  const { children } = props;

  const customClass = "py-[40px] md:py-[60px]";

  return <div className={customClass}>{children}</div>;
};

export default Section;
