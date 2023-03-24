import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Mainboard from "./Mainboard";

const Dashboard = () => {
  return (
    <div className="thc__dashboard-wrapper">
      <Sidebar />
      <Mainboard />
    </div>
  );
};

export default Dashboard;
