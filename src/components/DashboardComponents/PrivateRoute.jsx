import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../GlobalContexts/UserContextProvider";

const PrivateRoute = ({ children }) => {
  const { state } = useUserContext();
  return state?.user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
