import React, { useState, useCallback } from "react";

// Child Component
const Counter = React.memo(({ value, increment, children }) => {
  console.log("Rendering Counter For " + children);
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={increment}>{children}</button>
    </div>
  );
});

//Main Component
const Solution = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div>
      <Counter value={age} increment={incrementAge}>
        Age +
      </Counter>
      <Counter value={salary} increment={incrementSalary}>
        Salary +
      </Counter>
    </div>
  );
};

export default Solution;
