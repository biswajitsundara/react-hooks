import { useState } from "react";

const Demo = () => {
  const [user, setUser] = useState();

  return <span>{user.name}</span>;
};

export default Demo;
