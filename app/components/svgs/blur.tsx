interface Props {
  customClass?: string;
}

const BlurIcon = (props: Props) => {
  const { customClass } = props;

  return (
    <svg aria-hidden="true" className={customClass}>
      <defs>
        <filter id="liquid">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="liquid"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BlurIcon;
