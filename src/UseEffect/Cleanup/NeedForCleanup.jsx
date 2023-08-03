import { useEffect, useState } from "react";

const NeedForCleanup = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("effect");
    setInterval(() => {
      setNumber(number + 1);
    }, 1000);
  }, [number]);

  return <h1>{number}</h1>;
};

export default NeedForCleanup;
