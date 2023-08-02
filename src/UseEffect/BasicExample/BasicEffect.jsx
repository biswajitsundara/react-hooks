import { React, useEffect, useState } from "react";

const BasicEffect = () => {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  });

  function updateCounter() {
    setCounter(count + 1);
  }

  return (
    <div>
      <h1>Button clicked {count} times</h1>
      <button onClick={updateCounter}>Click Me</button>
    </div>
  );
};

export default BasicEffect;