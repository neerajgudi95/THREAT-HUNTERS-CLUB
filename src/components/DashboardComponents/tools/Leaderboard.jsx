import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState();

  const getLeaderboardData = async () => {
    const response = axios.get(
      `${process.env.DASHBOARD_ENDPOINT}getLeaderBoard`
    );
    const data = await response;
    // console.log(typeof data.data, data.data);
    setLeaderboardData(data.data);
  };

  useEffect(() => {
    getLeaderboardData();
  }, []);

  return (
    <div className="m-5 flex items-center justify-center w-full">
      <p className="text-center rounded-xl lg:w-2/3 p-2 m-3 bg-red-100 border-red-400 text-red-700">
        Leaderboard be will shown shortly
      </p>
    </div>
  );
};

export default Leaderboard;
