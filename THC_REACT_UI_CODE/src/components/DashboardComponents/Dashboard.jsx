import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Mainboard from "./Mainboard";

const Dashboard = () => {
  const params = useParams();
  console.log(params.userId);
  return (
    <div className="thc__dashboard">
      <Sidebar />
      <Mainboard />
    </div>
  );
};

export default Dashboard;
