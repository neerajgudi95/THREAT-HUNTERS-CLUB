import React, { lazy, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown, MdLeaderboard } from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "./contexts/ContextProvider";

const DashChatPopup = lazy(() => import("./popups/DashChatPopup"));
const DashUserPopup = lazy(() => import("./popups/DashUserPopup"));
const DashNotifsPopup = lazy(() => import("./popups/DashNotifsPopup"));

import { useUserContext } from "../../GlobalContexts/UserContextProvider";
import { useNavigate } from "react-router-dom";

const NavButton = ({ title, customFunc, icon, color, dotColor, pointer }) => (
  <button
    onClick={customFunc}
    style={{ color, pointerEvents: pointer ? "none" : "auto" }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      style={{
        background: dotColor,
      }}
    />
    {icon}
  </button>
);

const DashNavbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  const { state } = useUserContext();
  const isUserVerified = state?.user?.isVerified === true;
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        // pointer={!isUserVerified}
        color={currentColor}
        icon={<AiOutlineMenu />}
        customFunc={handleActiveMenu}
      />
      <div className="flex items-center gap-3">
        <NavButton
          title="Chat"
          pointer={!isUserVerified}
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
          // dotColor="#7DCE13"
        />
        <NavButton
          title="Notifications"
          pointer={!isUserVerified}
          customFunc={() => handleClick("notifs")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <NavButton
          title="Leaderboard"
          pointer={!isUserVerified}
          customFunc={() => navigate("/dashboard/leaderboard")}
          color={currentColor}
          icon={<MdLeaderboard />}
        />
        {/* <TooltipComponent content="Profile" position="BottomCenter"> */}
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => {
            handleClick("userProfile");
          }}
        >
          <span className="text-gray-400 text-14">Hi,</span>
          <span className="text-gray-400 text-14">
            {state?.user?.info?.firstName}
          </span>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
        {/* </TooltipComponent> */}
        {isClicked.chat && <DashChatPopup />}
        {isClicked.notifs && <DashNotifsPopup />}
        {isClicked.userProfile && <DashUserPopup />}
      </div>
    </div>
  );
};

export default DashNavbar;
