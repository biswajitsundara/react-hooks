import { useEffect, useState } from "react";

const PrimitiveCounter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>Count: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Click Me Second</button>
    </>
  );
};

export default PrimitiveCounter;
