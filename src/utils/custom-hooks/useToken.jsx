import { useState } from "react";

export const useToken = () => {
  const oldToken = localStorage.getItem("token");
  const [token, setTokenIntenal] = useState(() =>
    !oldToken ? null : oldToken
  );

  const setToken = async (newToken) => {
    localStorage.setItem("token", newToken);
    setTokenIntenal(newToken);
  };
  return [token, setToken];
};
