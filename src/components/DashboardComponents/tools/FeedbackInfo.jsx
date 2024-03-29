import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useStateContext } from "../contexts/ContextProvider";

const FeedbackInfo = ({ feedback }) => {
  const { currentMode } = useStateContext();
  return (
    <div className="p-10 mx-5">
      <div className="flex items-center justify-between">
        <p className="font-bold text-3xl my-5">Module: {feedback?.module}</p>
        {feedback?.videoLink !== "NA" && feedback?.videoLink !== "" ? (
          <p>
            <a
              href={feedback?.videoLink}
              target="_blank"
              className="text-blue-500"
            >
              Recording
            </a>
          </p>
        ) : (
          <p className="text-red-500">Recording is not available</p>
        )}
      </div>
      <div className="flex gap-10 items-center justify-evenly flex-wrap">
        <div className="flex items-center flex-wrap max-w-md px-10 bg-white dark:bg-secondary-dark-bg shadow-xl rounded-2xl h-[120px]">
          <div className="flex items-center -m-6 overflow-hidden bg-white dark:bg-secondary-dark-bg rounded-full w-[100px] h-[100px]">
            <CircularProgressbar
              value={`${(feedback?.behaviour / 10) * 100}`}
              text={`${feedback?.behaviour}/10`}
              styles={buildStyles({
                textColor: "#13005A",
                pathColor: "#13005A",
                trailColor: currentMode === "dark" ? "#4F4557" : "lightgrey",
              })}
            />
          </div>
          <p className="ml-10 font-medium text-gray-600 dark:text-gray-200 sm:text-xl">
            Behaviour
          </p>
        </div>
        <div className="flex items-center flex-wrap max-w-md px-10 bg-white dark:bg-secondary-dark-bg shadow-xl rounded-2xl h-[120px]">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white dark:bg-secondary-dark-bg rounded-full w-[100px] h-[100px]">
            <CircularProgressbar
              value={`${(feedback?.communicationSkill / 10) * 100}`}
              text={`${feedback?.communicationSkill}/10`}
              styles={buildStyles({
                textColor: "#E94560",
                pathColor: "#E94560",
                trailColor: currentMode === "dark" ? "#4F4557" : "lightgrey",
              })}
            />
            <span className="absolute text-2xl text-blue-700"></span>
          </div>
          <p className="ml-10 font-medium text-gray-600 dark:text-gray-200 sm:text-xl">
            Comuncation Skills
          </p>
        </div>
        <div className="flex items-center flex-wrap max-w-md px-10 bg-white dark:bg-secondary-dark-bg shadow-xl rounded-2xl h-[120px]">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white dark:bg-secondary-dark-bg rounded-full w-[100px] h-[100px]">
            <CircularProgressbar
              value={`${(feedback?.technicalSkills / 10) * 100}`}
              text={`${feedback?.technicalSkills}/10`}
              styles={buildStyles({
                textColor: "#03C988",
                pathColor: "#03C988",
                trailColor: currentMode === "dark" ? "#4F4557" : "lightgrey",
              })}
            />
            <span className="absolute text-2xl text-blue-700"></span>
          </div>
          <p className="ml-10 font-medium text-gray-600 dark:text-gray-200 sm:text-xl">
            Technical Skills
          </p>
        </div>
        <div className="flex items-center flex-wrap max-w-md px-10 bg-white dark:bg-secondary-dark-bg shadow-xl rounded-2xl h-[120px]">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white dark:bg-secondary-dark-bg rounded-full w-[100px] h-[100px]">
            <CircularProgressbar
              value={`${(feedback?.learningAttitude / 10) * 100}`}
              text={`${feedback?.learningAttitude}/10`}
              styles={buildStyles({
                textColor: "#6D67E4",
                pathColor: "#6D67E4",
                trailColor: currentMode === "dark" ? "#4F4557" : "lightgrey",
              })}
            />
            <span className="absolute text-2xl text-blue-700"></span>
          </div>
          <p className="ml-10 font-medium text-gray-600 dark:text-gray-200 sm:text-xl">
            Learning Attitude
          </p>
        </div>
        <div className="flex items-center flex-wrap max-w-md px-10 bg-white dark:bg-secondary-dark-bg shadow-xl rounded-2xl h-[120px]">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white dark:bg-secondary-dark-bg rounded-full w-[100px] h-[100px]">
            <CircularProgressbar
              value={`${(feedback?.problemSolving / 10) * 100}`}
              text={`${feedback?.problemSolving}/10`}
              styles={buildStyles({
                textColor: "#FFAC41",
                pathColor: "#FFAC41",
                trailColor: currentMode === "dark" ? "#4F4557" : "lightgrey",
              })}
            />
            <span className="absolute text-2xl text-blue-700"></span>
          </div>
          <p className="ml-10 font-medium text-gray-600 dark:text-gray-200 sm:text-xl">
            Problem Solving Ability
          </p>
        </div>
      </div>
      <div className="my-10">
        <p className="font-bold text-xl">Good observations</p>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {feedback?.goodObservations.map((obs, idx) => (
            <li key={idx}>{obs}</li>
          ))}
        </ul>
      </div>
      <div className="my-10">
        <p className="font-bold text-xl">Imporvements required</p>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {feedback?.improvementsRequired.map((improv, idx) => (
            <li key={idx}>{improv}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackInfo;
