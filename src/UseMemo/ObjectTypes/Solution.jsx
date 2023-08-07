import { useEffect, useState, useMemo } from "react";

const Solution = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");

  const userType = useMemo(
    () => ({
      underAge: age < 18 ? true : false,
      citizen: country === "USA" ? true : false,
    }),
    [age, country]
  );

  useEffect(() => {
    console.log("user type has change");
  }, [userType]);

  console.log("Component Re Rendered");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} placeholder="new name" />
      <input onChange={(e) => setAge(e.target.value)} placeholder="new age" />
    </div>
  );
};

export default Solution;
