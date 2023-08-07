import { useState } from "react";

const MemoProblemDemo = () => {
  const [text, setText] = useState("");

  const expensiveFunction = () => {
    console.log("expensive function re rendered");
    let total = 0;
    for (let i = 0; i < 2000000000; i++) {
      total += i;
    }
    return total;
  };

  const sum = expensiveFunction();
  console.log("component re rendered!");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a text"
      />
      <h3>{sum}</h3>
    </div>
  );
};

export default MemoProblemDemo;
