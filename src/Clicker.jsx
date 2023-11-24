export default function Clicker() {
  const handleClick = () => {
    console.log("clicked button");
  };
  const handleHover = () => {
    console.log("hovered");
  };
  return (
    <div>
      <h3>Click</h3>
      <p onMouseOver={handleHover}>hover over me</p>
      <button onMouseOver={handleClick}>Click</button>
    </div>
  );
}
