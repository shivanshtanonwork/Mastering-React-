import { useState, useEffect } from "react";

const useFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users", {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      const json = await res.json();
      console.log(json);
      if (!json.data) return;
      setUsers(json.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return { users, isLoading, error };
};

export default useFetch;
