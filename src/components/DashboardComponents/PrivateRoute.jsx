import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../GlobalContexts/UserContextProvider";

const PrivateRoute = ({ children }) => {
  const { state, dispatch } = useUserContext();
  const user = true;
  useEffect(() => {
    dispatch({ type: "TOKEN_VALIDATE" });
  }, []);

  return state?.user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
