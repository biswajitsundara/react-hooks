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
const Problem = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const incrementSalary = () => {
    setSalary(salary + 1);
  };

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

export default Problem;
