import List from "./List";
export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((el) => {
        return (
          // <List
          //   key={el.id}
          //   item={el.item}
          //   quantity={el.quantity}
          //   completed={el.completed}
          // />
          <List key={el.id} {...el}></List>
        );
      })}
    </ul>
  );
}
