interface Props {
  className?: string;
}

const Arrow = (props: Props) => {
  const { className } = props;
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
      <path
        d="M3,12H21m-3,3,3-3L18,9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        className={className}
      />
    </svg>
  );
};

export default Arrow;
