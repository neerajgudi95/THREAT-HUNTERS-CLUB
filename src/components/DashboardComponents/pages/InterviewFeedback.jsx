import React, { useEffect, useState } from "react";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import axios from "axios";
import { useSnackbar } from "notistack";
import FeedbackInfo from "../tools/FeedbackInfo";
import Loader from "../../Landing page components/loader/Loader";

const InterviewFeedback = () => {
  const [feedbackList, setFeedbackList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { state } = useUserContext();

  const getFeedbackList = async () => {
    try {
      setIsLoading(true);
      const email = state?.user?.email;
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}getFeedback/${email}`
      );
      const data = await response.data;
      setFeedbackList(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  useEffect(() => {
    getFeedbackList();
  }, []);

  return (
    <>
      <h2 className="text-center mt-5 text-4xl">MOCK INTERVIEW FEEDBACK</h2>
      {isLoading ? (
        <Loader />
      ) : feedbackList ? (
        feedbackList.map((feedback, idx) => (
          <FeedbackInfo feedback={feedback} key={idx} />
        ))
      ) : (
        <div className="m-5 flex items-center justify-center w-full">
          <p className="text-center rounded-xl lg:w-2/3 p-2 m-3 bg-red-100 border-red-400 text-red-700">
            No feedback available yet
          </p>
        </div>
      )}
    </>
  );
};

export default InterviewFeedback;
