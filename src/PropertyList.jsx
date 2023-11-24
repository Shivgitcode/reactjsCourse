import Property from "./Property";

export default function PropertyList({ data }) {
  return (
    <div className="flex justify-center bg-red-500 relative top-72 gap-5 ">
      {data.map((el) => {
        return <Property key={el.id} {...el}></Property>;
      })}
    </div>
  );
}
