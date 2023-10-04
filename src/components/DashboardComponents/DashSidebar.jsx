import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { SlDocs } from "react-icons/sl";
import { SiSplunk } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { AiFillAlert } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { HiOutlineServer } from "react-icons/hi";
import { BsChatDots, BsRecordBtn } from "react-icons/bs";
import {
  MdOutlineCancel,
  MdOutlineQuiz,
  MdOutlineFeedback,
  MdOutlineMonitorHeart,
  MdOutlineSecurity,
} from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "./contexts/ContextProvider";
import logo from "../../assets/earth.png";
import { useUserContext } from "../../GlobalContexts/UserContextProvider";

const DashSidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const { state } = useUserContext();
  const isUserVerified = state?.user?.isVerified === true;
  const isPaymentVerified = state?.user?.paymentStatus === true;

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-black-200 hover:text-black hover:bg-light-gray m-2 text-white";

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="m-2 h-[98vh] md:overflow-hidden overflow-auto md:hover:overflow-auto z-20">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/dashboard/home"
              className="items-center"
              onClick={() => setActiveMenu(false)}
            >
              <div className="thc__footer-links_logo">
                <img src={logo} alt="logo" />
                <div className="thc__footer-links_brand">
                  <p>THREAT</p>
                  <p>HUNTERS</p>
                </div>
              </div>
            </Link>
            {/* <TooltipComponent content="menu" position="BottomCenter"> */}
            <button
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              type="button"
              onClick={handleCloseSideBar}
            >
              <MdOutlineCancel />
            </button>
            {/* </TooltipComponent> */}
          </div>
          <div className="mt-10 text-white">
            <p className="text-gray-400 m-3 mt-4 uppercase">Dashboard</p>
            <NavLink
              to={`/dashboard/home`}
              key="home"
              style={({ isActive }) => ({
                pointerEvents:
                  (!isUserVerified || !isPaymentVerified) && "none",
                backgroundColor: isActive ? currentColor : "",
              })}
              onClick={handleCloseSideBar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <AiOutlineHome
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  color: isActive ? white : "",
                })}
                size="1.5rem"
              />
              <span className="capitalize">Home</span>
            </NavLink>
            <NavLink
              to={`/dashboard/notes`}
              key="notes"
              style={({ isActive }) => ({
                pointerEvents:
                  (!isUserVerified || !isPaymentVerified) && "none",
                backgroundColor: isActive ? currentColor : "",
              })}
              onClick={handleCloseSideBar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <SlDocs
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  color: isActive ? white : "",
                })}
                size="1.5rem"
              />
              <span className="capitalize">Notes</span>
            </NavLink>
            {state?.user?.role === "admin" && (
              <NavLink
                to={`/dashboard/members`}
                key="members"
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  backgroundColor: isActive ? currentColor : "",
                })}
                onClick={handleCloseSideBar}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <FiUsers
                  style={({ isActive }) => ({
                    pointerEvents:
                      (!isUserVerified || !isPaymentVerified) && "none",
                    color: isActive ? white : "",
                  })}
                  size="1.5rem"
                />
                <span className="capitalize">Members</span>
              </NavLink>
            )}
            <NavLink
              to={`/dashboard/recordings`}
              key="recordings"
              style={({ isActive }) => ({
                pointerEvents:
                  (!isUserVerified || !isPaymentVerified) && "none",
                backgroundColor: isActive ? currentColor : "",
              })}
              onClick={handleCloseSideBar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <BsRecordBtn
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  color: isActive ? white : "",
                })}
                size="1.5rem"
              />
              <span className="capitalize">Recordings</span>
            </NavLink>
            <NavLink
              to={`/dashboard/discussion`}
              key="discussion"
              style={({ isActive }) => ({
                pointerEvents:
                  (!isUserVerified || !isPaymentVerified) && "none",
                backgroundColor: isActive ? currentColor : "",
              })}
              onClick={handleCloseSideBar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <BsChatDots
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  color: isActive ? white : "",
                })}
                size="1.5rem"
              />
              <span className="capitalize">Discussion</span>
            </NavLink>
            <NavLink
              to={`/dashboard/quiz`}
              key="quiz"
              style={({ isActive }) => ({
                pointerEvents:
                  (!isUserVerified || !isPaymentVerified) && "none",
                backgroundColor: isActive ? currentColor : "",
              })}
              onClick={handleCloseSideBar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <MdOutlineQuiz
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  color: isActive ? white : "",
                })}
                size="1.5rem"
              />
              <span className="capitalize">Test yourself</span>
            </NavLink>
            {state?.user?.role === "admin" && (
              <NavLink
                to={`/dashboard/assignments`}
                key="assignments"
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  backgroundColor: isActive ? currentColor : "",
                })}
                onClick={handleCloseSideBar}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <VscFeedback
                  style={({ isActive }) => ({
                    pointerEvents:
                      (!isUserVerified || !isPaymentVerified) && "none",
                    color: isActive ? white : "",
                  })}
                  size="1.5rem"
                />
                <span className="capitalize">Assignments</span>
              </NavLink>
            )}
            {state?.user?.role === "member" && (
              <NavLink
                to={`/dashboard/feedback`}
                key="feedback"
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  backgroundColor: isActive ? currentColor : "",
                })}
                onClick={handleCloseSideBar}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <VscFeedback
                  style={({ isActive }) => ({
                    pointerEvents:
                      (!isUserVerified || !isPaymentVerified) && "none",
                    color: isActive ? white : "",
                  })}
                  size="1.5rem"
                />
                <span className="capitalize">Mock Interview</span>
              </NavLink>
            )}
            {state?.user?.role === "admin" && (
              <NavLink
                to={`/dashboard/interview-feedback`}
                key="games"
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  backgroundColor: isActive ? currentColor : "",
                })}
                onClick={handleCloseSideBar}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <MdOutlineFeedback
                  style={({ isActive }) => ({
                    pointerEvents:
                      (!isUserVerified || !isPaymentVerified) && "none",
                    color: isActive ? white : "",
                  })}
                  size="1.5rem"
                />
                <span className="capitalize">Mock Interview Feedback</span>
              </NavLink>
            )}
          </div>
          {/* {state?.user?.role === "admin" && ( */}
          <div className="mt-10 text-white">
            <p className="text-gray-400 m-3 mt-4 uppercase">ALERTS</p>
            <NavLink
              to={`/dashboard/alerts/edr`}
              key="EDR"
              style={({ isActive }) => ({
                pointerEvents:
                  (!isUserVerified || !isPaymentVerified) && "none",
                backgroundColor: isActive ? currentColor : "",
              })}
              onClick={handleCloseSideBar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <HiOutlineServer
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  color: isActive ? white : "",
                })}
                size="1.5rem"
              />
              <span className="capitalize">EDR</span>
            </NavLink>
            <NavLink
              to={`/dashboard/alerts/ids`}
              key="IDS"
              style={({ isActive }) => ({
                pointerEvents:
                  (!isUserVerified || !isPaymentVerified) && "none",
                backgroundColor: isActive ? currentColor : "",
              })}
              onClick={handleCloseSideBar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <MdOutlineSecurity
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  color: isActive ? white : "",
                })}
                size="1.5rem"
              />
              <span className="capitalize">IDS</span>
            </NavLink>
            <NavLink
              to={`/dashboard/alerts/splunk`}
              key="SPLUNK"
              style={({ isActive }) => ({
                pointerEvents:
                  (!isUserVerified || !isPaymentVerified) && "none",
                backgroundColor: isActive ? currentColor : "",
              })}
              onClick={handleCloseSideBar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <SiSplunk
                style={({ isActive }) => ({
                  pointerEvents:
                    (!isUserVerified || !isPaymentVerified) && "none",
                  color: isActive ? white : "",
                })}
                size="1.5rem"
              />
              <span className="capitalize">SPLUNK</span>
            </NavLink>
          </div>
          {/* )} */}
        </>
      )}
    </div>
  );
};

export default DashSidebar;
