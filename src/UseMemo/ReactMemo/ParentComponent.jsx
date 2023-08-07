import ExpensiveComponentWithMemo from "./ExpensiveComponentWithMemo";
import { useState } from "react";

const ParentComponent = () => {
  const [text, setText] = useState("");
  console.log("Component Re rendered");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a text"
      />
      <ExpensiveComponentWithMemo />
    </>
  );
};

export default ParentComponent;
