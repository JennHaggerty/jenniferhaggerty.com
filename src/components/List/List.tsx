interface Item {
  content: React.ReactNode;
}

interface Props {
  items: Item[];
  id?: string;
}

const List = (props: Props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item.content}</li>
      ))}
    </ul>
  );
};

export default List;
