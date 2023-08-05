import { useState } from "react";

const Solution = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleIncrementAsync = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrementAsync}>Increment Async</button>
    </>
  );
};

export default Solution;
