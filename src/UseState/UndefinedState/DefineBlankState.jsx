import { useState } from "react";

const DefineBlankState = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    images: [],
  });

  return (
    <>
      Username: <span>{user.name}</span>
      Hobbies: <span>{user.images[1]}</span>
    </>
  );
};

export default DefineBlankState;
