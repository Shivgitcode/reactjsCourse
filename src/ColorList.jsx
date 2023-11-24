export default function ColorList({ colors }) {
  const elements = [
    <p>hello!</p>,
    <h1>Bye!</h1>,
    <input type="password" name="" id="" />,
  ];
  return (
    <div>
      <p>Color List</p>
      {colors.map((el) => {
        return <li>{el}</li>;
      })}
    </div>
  );
}
