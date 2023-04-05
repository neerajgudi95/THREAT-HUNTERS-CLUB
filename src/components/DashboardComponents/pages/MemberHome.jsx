import React from "react";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";

const MemberHome = () => {
  const { state } = useUserContext();
  return (
    <div>
      {!state?.user?.isVerified && (
        <div className=" rounded-xl lg:w-2/3 p-2 m-3 bg-red-100 border-red-400 text-red-700">
          <p className="text-center">
            Please verify your email, through the email verification link which
            is already sent to you, and login again
          </p>
        </div>
      )}
      <div className="text-center">
        <h1 className="text-2xl text-center">
          Hi,{" "}
          <span className="text-4xl text-lime-500">
            {state?.user?.info?.firstName}
          </span>
        </h1>
        <p className="mt-2 text-3xl">Welcome to Treat Hunters Club</p>
      </div>
    </div>
  );
};

export default MemberHome;
