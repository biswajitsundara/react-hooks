import { useState } from "react";

const Problem = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrementAsync = () => {
    setTimeout(() => {
      setCount(count + 1);
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

export default Problem;
