// export default function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;
//   //   const result = num1 === num2 ? "you Win" : "you lose";

//   //   approach 1

//   //   if (num1 === num2) {
//   //     return (
//   //       <div>
//   //         <h2>You Win!</h2>
//   //         <p>Num1:{num1}</p>
//   //         <p>Num1:{num2}</p>
//   //       </div>
//   //     );
//   //   }
//   //   return (
//   //     <div>
//   //       <h2>You Lose!</h2>
//   //       <p>Num1: {num1}</p>
//   //       <p>Num2: {num2}</p>
//   //     </div>
//   //   );
//   // approach 2
//   return (
//     <div>
//       <h2>{num1 === num2 ? "you Win" : "you lose"}</h2>
//       <p>Num1:{num1}</p>
//       <p>Num2:{num2}</p>
//       <p></p>
//     </div>
//   );
// }

// export default function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;
//   return (
//     <div>
//       <h2>Double Dice</h2>
//       {num1 === num2 ? <h3>You win!</h3> : null}
//       <p>Num1:{num1}</p>
//       <p>Num2:{num2}</p>
//     </div>
//   );
// }
export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const styles = { color: num1 === num2 ? "green" : "red" };
  return (
    <div className="DoubleDice" style={styles}>
      <h2>Double Dice</h2>
      {num1 === num2 && <h3>You win!</h3>}
      <p>Num1:{num1}</p>
      <p>Num2:{num2}</p>
    </div>
  );
}
