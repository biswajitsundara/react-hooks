import { useState } from "react";

const WithObject = () => {
  const [data, setData] = useState();

  const inputHandler = (e) => {
    console.log(e.target.value);
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <p>{JSON.stringify(data)}</p>
      <form>
        <input
          type="text"
          name="name"
          onChange={inputHandler}
          placeholder="Enter Name"
        />
        <input
          type="text"
          name="username"
          onChange={inputHandler}
          placeholder="Enter User Name"
        />
        <input
          type="text"
          name="email"
          onChange={inputHandler}
          placeholder="Enter Email"
        />
        <input
          type="text"
          name="password"
          onChange={inputHandler}
          placeholder="Enter Password"
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default WithObject;
