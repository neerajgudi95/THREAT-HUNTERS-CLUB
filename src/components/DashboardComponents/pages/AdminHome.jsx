import React, { useState, useEffect } from "react";
import axios from "axios";
import { SkeletonComponent } from "@syncfusion/ej2-react-notifications";
import DiskDetails from "../tools/DiskDetails";

const AdminHome = () => {
  const [earnings, setEarnings] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);
  const [diskUtil, setDiskUtil] = useState({
    availableSpace: 0,
    remainingSpace: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const calculateEarnings = (members) => {
    let totalEarnings = 0;
    totalEarnings = members * 2975 - 2 * 2550;
    return totalEarnings;
  };

  useEffect(() => {
    let endpoints = [
      `${process.env.DASHBOARD_ENDPOINT}getUsers`,
      `${process.env.DASHBOARD_ENDPOINT}getDiskDetails`,
    ];

    const getHomeDetails = async () => {
      setIsLoading(true);
      const response = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      );
      console.log(response);
      setTotalMembers(response[0].data.length - 2);
      setEarnings(calculateEarnings(response[0].data.length - 2));
      const { availableSpace, spaceRemaining } = response[1].data;
      setDiskUtil({
        availableSpace: Math.floor(availableSpace),
        remainingSpace: Math.floor(spaceRemaining),
      });
      setIsLoading(false);
    };

    setTimeout(getHomeDetails(), 5000);
    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between p-5 w-full">
      <div className="bg-white dark:text-gray-200 h-3/4 w-1/2 rounded-xl  dark:bg-secondary-dark-bg p-8 pt-9 m-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">Members</p>
            {isLoading ? (
              <SkeletonComponent
                id="skeletonRectangleMedium"
                shape="Rectangle"
                width="100%"
                height="35px"
              ></SkeletonComponent>
            ) : (
              <p className="text-2xl">{totalMembers}</p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white dark:text-gray-200 h-3/4 rounded-xl w-1/2 dark:bg-secondary-dark-bg p-8 pt-9 m-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">Earnings</p>
            {console.log(isLoading)}
            {isLoading ? (
              <SkeletonComponent
                id="skeletonRectangleMedium"
                shape="Rectangle"
                width="100%"
                height="35px"
              ></SkeletonComponent>
            ) : (
              <p className="text-2xl">&#x20B9; {earnings}</p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white dark:text-gray-200 h-3/4 rounded-xl w-1/2 dark:bg-secondary-dark-bg p-8 pt-9 m-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">Disk details (GB)</p>
          </div>
        </div>
        {isLoading ? (
          <SkeletonComponent
            className="skeleton"
            id="skeletonCircleLarger"
            shape="Circle"
            width="80px"
          ></SkeletonComponent>
        ) : (
          <DiskDetails diskDetails={diskUtil} />
        )}
      </div>
    </div>
  );
};

export default AdminHome;
