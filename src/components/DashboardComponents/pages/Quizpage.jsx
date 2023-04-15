import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RiLock2Fill } from "react-icons/ri";
import { useStateContext } from "../contexts/ContextProvider";

const Quizpage = () => {
  const [quizList, setQuizList] = useState([]);
  const { currentColor } = useStateContext();

  const getQuizList = async () => {
    const response = await axios.get(
      `${process.env.DASHBOARD_ENDPOINT}getAllModules`
    );
    const data = await response.data;
    setQuizList(data);
  };

  useEffect(() => {
    getQuizList();
  }, []);

  return (
    <div className="flex gap-4 flex-wrap p-5 md:p-10">
      {quizList &&
        quizList.map((module) => {
          return (
            <div
              className="max-w-[300px] rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-700 hover:shadow-lg dark:hover:shadow-2xl transition-shadow"
              key={module.name}
            >
              <h5 className="mb-2 text-xl font-medium capitalize leading-tight text-neutral-800 dark:text-neutral-50">
                {module.name}
              </h5>
              {module.allowed ? (
                <Link
                  className="inline-block mt-5 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  dark:text-white hover:shadow-md"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  to={`/dashboard/quiz/${module.name}`}
                  style={{ backgroundColor: currentColor }}
                >
                  Start
                </Link>
              ) : (
                <span className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal dark:text-white hover:shadow-md">
                  <RiLock2Fill color="gold" size="1.5rem" />
                </span>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Quizpage;
