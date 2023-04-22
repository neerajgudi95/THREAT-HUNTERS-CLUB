import React, { createContext, useContext, useEffect, useState } from "react";

const TimeContext = createContext();

// const initialState = {
//   time: 0,
// };

export const TimeContextProvider = ({ children }) => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  useEffect(() => {
    let interval = null;
    window.addEventListener("beforeunload", function (e) {
      // Store the time and URL of the current page in local storage
      localStorage.setItem("quiztimer", time);
    });
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <TimeContext.Provider
      value={{
        time,
        setTimerOn,
        setTime,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export const useTimeContext = () => useContext(TimeContext);
