import React from "react";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import { FaDotCircle } from "react-icons/fa";

const MemberHome = () => {
  const { state } = useUserContext();

  const isUserVerified = state?.user?.isVerified === true;

  return (
    <>
      {!isUserVerified ? (
        <div className=" rounded-xl w-full p-2 m-3 bg-red-100 border-red-400 text-red-700 flex justify-center items-center ">
          <p className="text-center">
            Please verify your email, through the email verification link which
            is already sent to you, and login again. If the verifcation link is
            not working, kindly contact the admin.
          </p>
        </div>
      ) : (
        <>
          <div className="text-center dark:text-white">
            <h1 className="text-2xl text-center">
              Hi,
              <span className="text-4xl text-lime-500">
                {state?.user?.info?.firstName}
              </span>
            </h1>
            <p className="mt-2 text-3xl">Welcome to Treat Hunters Club</p>
          </div>

          <div className="h-[500px] m-5 dark:text-white">
            <iframe
              src="https://threatmap.checkpoint.com/"
              className="w-[100%] h-[100%] wobject-contain"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
            ></iframe>
          </div>
        </>
      )}
    </>
  );
};

export default MemberHome;
