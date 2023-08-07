import { useMemo, useState } from "react";

const WithDependency = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const expensiveFunction = (n) => {
    console.log("expensive function called");
    let total = 0;
    for (let i = 0; i < n; i++) {
      total += 1;
    }
    return total;
  };

  const sum = useMemo(() => expensiveFunction(number), [number]);
  console.log("component re rendered!");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a text"
      />

      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        placeholder="Enter a number"
      />
      <h3>{sum}</h3>
    </div>
  );
};

export default WithDependency;
