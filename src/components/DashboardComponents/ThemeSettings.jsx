import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import { HiMoon } from "react-icons/hi";

import { useStateContext } from "./contexts/ContextProvider";
import { themeColors } from "./dummyData";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const ThemeSettings = () => {
  const { currentMode, currentColor, setColor, setMode, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 z-20 transition-all">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484b52] w-400 transition-all">
        <div className="flex justify-between p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="flex items-center gap-3">
            <div className="mt-4">
              <input
                type="radio"
                id="light"
                name="theme"
                value="light"
                className="cursor-pointer hidden"
                onChange={setMode}
                checked={currentMode === "light"}
              />
              <div
                className="flex items-center p-2 rounded"
                style={{
                  backgroundColor: currentMode === "light" && currentColor,
                  color: currentMode === "light" && "white",
                }}
              >
                <BiSun />
                <label htmlFor="light" className="ml-1 text-md cursor-pointer">
                  Light
                </label>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="radio"
                id="dark"
                name="theme"
                value="dark"
                className="cursor-pointer hidden"
                onChange={setMode}
                checked={currentMode === "dark"}
              />
              <div
                className="flex items-center p-2 rounded"
                style={{
                  backgroundColor: currentMode === "dark" && currentColor,
                }}
              >
                <HiMoon />
                <label htmlFor="dark" className="ml-1 text-md cursor-pointer">
                  Dark
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              // <TooltipComponent
              //   content={item.name}
              //   position="TopCenter"
              //   key={index}
              // >
              <div
                className="relative mt-2 cursor-pointer flex gap-5 items-center"
                key={index}
              >
                <button
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setColor(item.color)}
                >
                  <BsCheck
                    className={`ml-2 text-2xl text-white ${
                      item.color === currentColor ? "block" : "hidden"
                    }`}
                  />
                </button>
              </div>
              // </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
