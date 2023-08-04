import React from "react";
import useLocalStorage from "./useLocalStorage";

const DemoComponent = () => {
  const [name, setName] = useLocalStorage("userName", "");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <p>Hello {name || "Guest"}</p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
};

export default DemoComponent;
