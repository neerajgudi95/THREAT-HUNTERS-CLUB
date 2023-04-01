import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { userProfileData } from "../dummyData";
import { useStateContext } from "../contexts/ContextProvider";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";

const DashUserPopup = () => {
  const { currentColor } = useStateContext();
  const { state, dispatch } = useUserContext();
  const navigate = useNavigate();
  const handleLUserLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate("/");
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 z-10 shadow-lg">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {`${state?.user?.info?.firstName} ${state?.user?.info?.lastName}`}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {state?.user?.email}
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
          <div>
            <Link
              to={"/dashboard/home"}
              className="font-semibold dark:text-gray-200"
            >
              My profile
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          onClickFunc={handleLUserLogout}
        />
      </div>
    </div>
  );
};

export default DashUserPopup;
