import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notifs: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState();
  const [currentColor, setCurrentColor] = useState("#82CD47");
  const [currentMode, setCurrentMode] = useState(
    () => localStorage.getItem("themeMode") || "light"
  );
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };
  const handleClick = (clicked) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [clicked]: !prevState[clicked],
    }));
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setCurrentColor,
        setMode,
        setColor,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
