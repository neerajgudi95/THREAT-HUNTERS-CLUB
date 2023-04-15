import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Question from "./Question";
import { useQuizScoreContext } from "../contexts/QuizScoreContext";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import Loader from "../../Landing page components/loader/Loader";

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
    try {
      if (userScore <= 0) {
        throw new Error(
          "You cannot submit 0 score, complete quiz and submit again"
        );
      }

      const response = await axios.post(
        `${process.env.DASHBOARD_ENDPOINT}postMarks/${userEmail}/${userScore}`
      );
      setError("");
      enqueueSnackbar("Score submitted successfully", { variant: "success" });
      navigate(-1);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
      setError(error.message);
    }
  };

  useEffect(() => {
    getQuizList();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    // <SnackbarProvider maxSnack={1} autoHideDuration={5000}>
    <div className="p-10 flex flex-col gap-5">
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
    // </SnackbarProvider>
  );
};

export default QuizModule;

// https://181.215.68.163:8083/postQuestion/{module}
// https://181.215.68.163:8083/getAllModules
// https://181.215.68.163:8083/enableModule/{moduleName}
// https://181.215.68.163:8083/getModule/{moduleName}
// https://181.215.68.163:8083/postMarks/{email}/{mark}
// https://181.215.68.163:8083/getMarks/{email}
