import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../Landing page components/loader/Loader";
import LeaderboardTable from "./LeaderboardTable";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getLeaderboardData = async () => {
    try {
      setIsLoading(true);
      const response = axios.get(
        `${process.env.DASHBOARD_ENDPOINT}getLeaderBoard`
      );
      const data = await response;
      setLeaderboardData(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLeaderboardData();
  }, []);

  return (
    <div className="m-5">
      <h2 className="mt-5 text-4xl text-center">LEADERBOARD</h2>
      {isLoading ? (
        <Loader />
      ) : leaderboardData ? (
        leaderboardData?.map((module, idx) => (
          <LeaderboardTable module={module} key={idx} />
        ))
      ) : (
        <div className="m-5 flex items-center justify-center w-full">
          <p className="text-center rounded-xl lg:w-2/3 p-2 m-3 bg-red-100 border-red-400 text-red-700">
            Leaderboard is not available yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
