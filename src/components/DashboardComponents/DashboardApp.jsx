import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "./contexts/ContextProvider";
import { useUserContext } from "../../GlobalContexts/UserContextProvider";
import { Outlet } from "react-router-dom";
import "./DashboardApp.css";
import { lazy, Suspense } from "react";
import Loader from "../LandingPageComponents/loader/Loader";

const DashNavbar = lazy(() => import("./DashNavbar"));
const DashSidebar = lazy(() => import("./DashSidebar"));
const ThemeSettings = lazy(() => import("./ThemeSettings"));

const DashboardApp = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const { dispatch } = useUserContext();

  useEffect(() => {
    dispatch({ type: "RELOAD" });
  }, []);

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <div className="flex dark:bg-secondary-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          {/* <TooltipComponent content="Settings" position="Top"> */}
          <button
            type="button"
            className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            style={{ background: currentColor, borderRadius: "50%" }}
            onClick={() => setThemeSettings((prevState) => !prevState)}
          >
            <FiSettings />
          </button>
          {/* </TooltipComponent> */}
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar  bg-main-navbar-bg transition-all z-10">
            <Suspense fallback={<Loader />}>
              <DashSidebar />
            </Suspense>
          </div>
        ) : (
          <div className="w-0 transition-all bg-main-navbar-bg">
            <Suspense fallback={<Loader />}>
              <DashSidebar />
            </Suspense>
          </div>
        )}
        <div
          className={`dark:bg-secondary-dark-bg bg-main-bg h-screen flex-2 w-full
          ${activeMenu ? "md:ml-72" : "flex-1"}`}
        >
          <div className="bg-main-navbar-bg nav w-full sticky">
            <Suspense fallback={<Loader />}>
              <DashNavbar />
            </Suspense>
          </div>
          <div className="min-h-screen dark:text-white bg-main-bg dark:bg-secondary-dark-bg w-full">
            <Outlet />
          </div>
          {themeSettings && (
            <Suspense fallback={<Loader />}>
              <ThemeSettings />
            </Suspense>
          )}
        </div>
      </div>
      {/* <DashFooter /> */}
    </div>
  );
};

export default DashboardApp;
