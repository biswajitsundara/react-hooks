import { React, useEffect, useState } from "react";

const CleanupToggle = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    toggle === true ? setToggle(false) : setToggle(true);
    console.log(toggle);
  }

  useEffect(() => {
    // This is the effect function
    console.log("Effect ran");

    // This is the cleanup function
    return () => {
      console.log("Cleanup function is being executed");
      console.log("Cleanup ran");
      console.log("Cleanup completed");
    };
  }, [toggle]);

  return (
    <div>
      <h1>
        I am <span>{toggle ? "Married" : "UnMarried"}</span>
      </h1>
      <button onClick={() => handleToggle()}>Click me</button>
    </div>
  );
};

export default CleanupToggle;
