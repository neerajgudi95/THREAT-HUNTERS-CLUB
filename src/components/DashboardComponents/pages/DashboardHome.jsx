import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../Button";
import { earningData } from "../dummyData";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";

const DashboardHome = () => {
  const { currentColor } = useStateContext();
  const { state } = useUserContext();
  return (
    <div className="mt-12">
      {!state?.user?.isVerified && (
        <div className="bg-white dark:text-gray-200 w-full h-1/3 rounded-xl lg:w-full dark:bg-secondary-dark-bg p-8 pt-9 m-3">
          <p>
            Please verify your email, through the email verification link which
            is already sent to you
          </p>
        </div>
      )}
      {/* <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 w-full h-3/4 rounded-xl lg:w-full dark:bg-secondary-dark-bg p-8 pt-9 m-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Welcome</p>
              <p className="text-2xl">&#x20B9; 5100</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardHome;
