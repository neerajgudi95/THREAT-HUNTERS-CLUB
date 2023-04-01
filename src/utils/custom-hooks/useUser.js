import { useEffect, useState } from "react";
import { useToken } from "./useToken";

const getPayloadFromToken = (token) => {
  const encodedPayload = token.split(".")[1];
  return JSON.parse(Buffer.from(encodedPayload, "base64"));
};

export const useUser = () => {
  const [token] = useToken();
  const [user, setUser] = useState(() => {
    return !token ? null : getPayloadFromToken(token);
  });
  useEffect(() => {
    !token ? setUser(null) : setUser(getPayloadFromToken(token));
  }, [token]);

  return user;
};
