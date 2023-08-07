import React, { useState, useMemo } from "react";

/**
 * The `useMemo` accepts two arguments - one is the function, second is the dependency array
 * So we have  `useMemo(function isEven() {}, [firstCounter])`
 * In the dependecy array we have specified the state variable firstCounter so whenever it changes, it will invoke the function
 * We store the value to a variable, so it's cached `const isEven = useMemo()`
 * So use memo invokes the function and caches its result.
 */

const BasicMemo = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  function incrementByOne() {
    setFirstCounter(firstCounter + 1);
  }

  function incrementByTwo() {
    setSecondCounter(secondCounter + 2);
  }

  const isEven = useMemo(function isEven() {
    let i = 0;
    while (i < 2000000000) i++;
    return firstCounter % 2 == 0;
  }, [firstCounter])
  

  return (
    <div>
      <p>{isEven ? "Even" : "Odd"}</p>
      <p>{firstCounter}</p>
      <button onClick={incrementByOne}>First Counter</button>
      <p>{secondCounter}</p>
      <button onClick={incrementByTwo}>Second Counter</button>
    </div>
  );
};

export default BasicMemo;