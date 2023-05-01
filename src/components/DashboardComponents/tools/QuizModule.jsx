import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useBeforeUnload } from "react-router-dom";
import { useSnackbar } from "notistack";
import Question from "./Question";
import { useQuizScoreContext } from "../contexts/QuizScoreContext";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import Loader from "../../Landing page components/loader/Loader";
import { useStateContext } from "../contexts/ContextProvider";
import Stopwatch from "./Stopwatch";
import { useTimeContext } from "../contexts/TimerContext";

const QuizModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  // states to add loading and handle error
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // getting differebt states from context api
  const { state } = useUserContext();
  const { scoreState } = useQuizScoreContext();
  const { currentColor } = useStateContext();
  const { time, setTimerOn, setTime } = useTimeContext();

  const getQuizList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}getModule/${moduleId}`
      );
      const data = await response.data;
      setError("");
      setIsLoading(false);
      setQuestions(data.questions);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const handleSubmitScore = async () => {
    const userEmail = state.user.email;
    const userScore = scoreState.score;
    const timeTaken = time;
    const currentTime = new Date().toISOString();
    try {
      if (userScore <= 0) {
        throw new Error(
          "You cannot submit 0 score, complete quiz and submit again"
        );
      }
      if (timeTaken <= 0) {
        throw new Error(
          "Time taken seems to be 0, you might have refreshed the page. Kindly restart the quiz and try again"
        );
      }
      await axios.post(
        `${process.env.DASHBOARD_ENDPOINT}postMarks/${userEmail}/${moduleId}`,
        {
          marks: userScore.toString(),
          timeTaken: timeTaken.toString(),
          attemptedOn: currentTime,
        }
      );
      setError("");
      enqueueSnackbar(
        `You have scored ${userScore}/10 and your score has been submitted successfully`,
        { variant: "success" }
      );
      setTimerOn(false);
      navigate(-1);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
      setError(error.message);
    }
  };

  useEffect(() => {
    getQuizList();

    return () => {
      setTime(0);
      setTimerOn(false);
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="p-10 flex flex-col gap-5">
      <h2
        className="text-center text-4xl dark:text-gray-100"
        style={{ color: currentColor }}
      >
        {moduleId}
      </h2>
      <div className="float-right">
        <Stopwatch />
      </div>
      {questions &&
        questions.map((data, idx) => (
          <Question data={data} index={idx} key={idx} />
        ))}
      <div className="flex justify-center">
        <button
          onClick={handleSubmitScore}
          className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800"
        >
          Submit your score
        </button>
      </div>
    </div>
  );
};

export default QuizModule;
