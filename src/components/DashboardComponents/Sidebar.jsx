import React from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return <div>Sidebar</div>;
};

export default Sidebar;
