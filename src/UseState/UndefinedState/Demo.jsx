import { useState } from "react";

const Demo = () => {
  const [user, setUser] = useState();

  return (
    <>
      <h1>User Details</h1>Username: <span>{user && user.name}</span>
    </>
  );
};

export default Demo;
