import { useEffect, useState } from "react";

export default function useFetch(path) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://movie-api.murfidar.online/client/" + path)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return {
    data,
  };
}
