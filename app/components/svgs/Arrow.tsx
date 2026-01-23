interface Props {
  customClass?: string;
}

const Arrow = (props: Props) => {
  const { customClass } = props;
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      className={customClass}
      aria-hidden="true"
    >
      <path
        d="M3,12H21m-3,3,3-3L18,9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default Arrow;
