import React from "react";

const ExpensiveComponent = () => {
  console.log("expensive component rendered");

  let total = 0;
  for (let j = 0; j < 1000000; j++) {
    total += j;
  }

  return <div>Expensive component</div>;
};

export default ExpensiveComponent;
