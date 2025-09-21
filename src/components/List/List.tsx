interface Props {
  items: string[];
  id?: string;
}

const List = (props: Props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
