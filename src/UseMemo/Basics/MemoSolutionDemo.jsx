import { useMemo, useState } from "react";

const MemoSolutionDemo = () => {
  const [text, setText] = useState("");

  const expensiveFunction = () => {
    console.log("expensive function called");
    let total = 0;
    for (let i = 0; i < 20000000; i++) {
      total += 1;
    }
    return total;
  };

  const sum = useMemo(() => expensiveFunction(), []);
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

export default MemoSolutionDemo;
