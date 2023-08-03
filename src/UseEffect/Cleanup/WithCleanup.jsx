import { useEffect, useState } from "react";

const WithCleanup = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("effect");
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h1>{number}</h1>;
};

export default WithCleanup;
