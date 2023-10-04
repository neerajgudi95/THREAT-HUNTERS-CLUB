import { useEffect, useState } from "react";

export const useToken = () => {
  const [token, setTokenIntenal] = useState(() => {
    const oldToken = localStorage.getItem("token");
    return !oldToken ? null : oldToken;
  });

  const setToken = async (newToken) => {
    localStorage.setItem("token", newToken);
    // const addedToken = localStorage.getItem("token");
    setTokenIntenal(newToken);
  };

  useEffect(() => {
    // Update the token value from localStorage when the component mounts
    // window.addEventListener("storage", () => {
    //   // When local storage changes, dump the list to
    //   // the console.
    //   console.log(JSON.parse(window.localStorage.getItem("token")));
    // });
    setTokenIntenal(localStorage.getItem("token"));

    return () => {
      window.removeEventListener("storage", () => {});
    };
  }, []);

  return [token, setToken];
};
