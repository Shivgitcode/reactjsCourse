export default function Slots({ val1, val2, val3 }) {
  const result = val1 === val2 && val1 === val3;

  return (
    <div>
      <div>{[val1, val2, val3]}</div>
      {result ? (
        <h3 style={{ color: "green" }}>You win</h3>
      ) : (
        <h3 style={{ color: "red" }}>You Lose</h3>
      )}
      {result && <h3>Congrats</h3>}
    </div>
  );
}
