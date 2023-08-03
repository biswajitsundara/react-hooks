import { useEffect, useState, useMemo } from "react";

const NonPrimitive = () => {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false,
  });

//   const user = useMemo(
//     () => ({
//       name: state.name,
//       selected: state.selected,
//     }),
//     [state.name, state.selected]
//   );

  useEffect(() => {
    console.log("The state has changed");
  }, [state.name, state.selected]);

  const handleAddName = () => {
    setState((prev) => ({ ...prev, name }));
  };

  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  return (
    <>
      <p>{JSON.stringify(state)}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddName}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
    </>
  );
};

export default NonPrimitive;
