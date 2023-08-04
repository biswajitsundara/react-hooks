import { useState } from "react";

const useLocalStorage = (key, initalValue) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initalValue;

  const [value, setValue] = useState(initial);

  const updateLocalStorage = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateLocalStorage];
};

export default useLocalStorage;
