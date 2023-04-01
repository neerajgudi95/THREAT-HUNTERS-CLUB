import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "./contexts/ContextProvider";
import { useUserContext } from "../../GlobalContexts/UserContextProvider";
import { Outlet } from "react-router-dom";
import "./DashboardApp.css";

import { DashFooter, DashNavbar, DashSidebar, ThemeSettings } from "./exports";

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
    dispatch({ type: 'RELOAD' })
  }, [])

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: currentColor, borderRadius: "50%" }}
              onClick={() => setThemeSettings(true)}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <DashSidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <DashSidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen flex-2 w-full
            ${activeMenu ? "md:ml-72" : "flex-2"}`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg nav w-full">
            <DashNavbar />
          </div>
          <Outlet />
          {themeSettings && <ThemeSettings />}
        </div>
      </div>
      <DashFooter />
    </div>
  );
};

export default DashboardApp;
