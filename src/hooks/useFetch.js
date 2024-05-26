import { useEffect, useState } from "react";

const useFetch = (initialValue = "") => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([]);
  const [error, setError] = useState(false);
  const getData = async (api) => {
    setLoading(true);
    const response = await fetch(api);
    const data = await response.json();
    if (!response.ok) {
      setLoading(false);
      return setError(true);
    }
    setLoading(false);
    setValue(data);
    setError(false);
  };
  useEffect(() => {
    getData(initialValue);
  }, [initialValue]);

  return [value, loading, error];
};

export default useFetch;
