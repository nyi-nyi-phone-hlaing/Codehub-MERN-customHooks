import { useEffect, useState } from "react";

const getSavedValue = (storage, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(storage));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};
const useLocalStorage = (storage, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(storage, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(storage, JSON.stringify(value));
  }, [value, initialValue, storage]);

  return [value, setValue];
};

export default useLocalStorage;
