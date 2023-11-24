export default function Property({ name, rating, price }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1>{name}</h1>
      <h3>${price} a night</h3>
      <h4>{rating}⭐</h4>
    </div>
  );
}
