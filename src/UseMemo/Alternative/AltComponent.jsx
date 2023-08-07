import { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

const AltComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState("");

  console.log("Component re rendered");

  return (
    <>
      <BgProvider>
        <ExpensiveComponent />
      </BgProvider>
    </>
  );
};

export default AltComponent;

const BgProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  return (
    <div style={{ backgroundColor }}>
      <input
        type="text"
        onChange={(e) => setBackgroundColor(e.target.value)}
        placeholder="enter a text"
      />
      {children}
    </div>
  );
};
