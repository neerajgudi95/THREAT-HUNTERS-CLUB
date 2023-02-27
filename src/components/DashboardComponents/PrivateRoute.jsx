import React from "react";
import { Navigate, Redirect, Route } from "react-router-dom";
import { useUser } from "../../utils/custom-hooks/useUser";

const PrivateRoute = ({ children }) => {
  const user = useUser();
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
