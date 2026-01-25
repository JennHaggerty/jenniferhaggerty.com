interface Props {
  children: React.ReactNode;
  customClass?: string;
}

const Section = (props: Props) => {
  const { children, customClass } = props;

  return <section className={customClass}>{children}</section>;
};

export default Section;
