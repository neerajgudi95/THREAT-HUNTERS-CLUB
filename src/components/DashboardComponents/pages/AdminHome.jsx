import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiCpu } from "react-icons/fi";
import { MdStorage, MdCurrencyRupee } from "react-icons/md";
import { SkeletonComponent } from "@syncfusion/ej2-react-notifications";
import DiskDetails from "../tools/DiskDetails";
import CpuDetails from "../tools/CpuDetails";

const AdminHome = () => {
  const [earnings, setEarnings] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);
  const [diskUtil, setDiskUtil] = useState({
    availableSpace: 0,
    remainingSpace: 0,
  });
  const [cpuUtil, setCpuUtil] = useState({
    cpuUsed: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const calculateEarnings = (members) => {
    let totalEarnings = 0;
    totalEarnings = members * 2975 - 2 * 2550;
    return totalEarnings;
  };

  let endpoints = [
    `${process.env.DASHBOARD_ENDPOINT}getUsers`,
    `${process.env.DASHBOARD_ENDPOINT}getDiskDetails`,
    `${process.env.DASHBOARD_ENDPOINT}getCpuDetails`,
  ];

  const getHomeDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      );
      setTotalMembers(response[0].data.length - 2);
      setEarnings(calculateEarnings(response[0].data.length - 2));
      const { availableSpace, spaceRemaining } = response[1].data;
      setDiskUtil({
        availableSpace: Math.floor(availableSpace),
        remainingSpace: Math.floor(spaceRemaining),
      });

      setCpuUtil({ cpuUsed: response[2].data.cpuUsed });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHomeDetails();
    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className=" w-full">
      <div className=" flex justify-around items-center flex-1">
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
              <div className="flex gap-2 items-center font-bold text-gray-400">
                <p>Earnings</p>
              </div>
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
      </div>
      <div className=" flex justify-around items-center flex-1">
        <div className="bg-white dark:text-gray-200 h-3/4 rounded-xl w-1/2 dark:bg-secondary-dark-bg p-8 pt-9 m-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center font-bold text-gray-400">
              <MdStorage size={"1.5rem"} />
              <p>Disk details (GB)</p>
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
        <div className="bg-white dark:text-gray-200 h-3/4 rounded-xl w-1/2 dark:bg-secondary-dark-bg p-8 pt-9 m-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center font-bold text-gray-400">
              <FiCpu size={"1.5rem"} />
              <p>CPU usage details</p>
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
            <CpuDetails cpuDetails={cpuUtil} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
