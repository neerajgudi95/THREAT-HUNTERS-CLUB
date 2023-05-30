import React, { useEffect, useState } from "react";
import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import axios from "axios";
import { useSnackbar } from "notistack";
import FeedbackInfo from "../tools/FeedbackInfo";
import Loader from "../../LandingPageComponents/loader/Loader";

const InterviewFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { state } = useUserContext();
  const email = state?.user?.email;

  const getFeedbackList = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.DASHBOARD_ENDPOINT}getFeedback/${email}`
      );
      const feedbackData = await response.data;
      setFeedbackList(feedbackData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  const generateFeedbackList = (feedList) => {
    let newList = [];
    for (let i = 0; i < feedList.length; i++) {
      newList.push(<FeedbackInfo feedback={feedList[i]} key={i} />);
    }
    return newList;
  };

  useEffect(() => {
    getFeedbackList();
  }, []);

  return (
    <>
      <h2 className="text-center mt-5 text-4xl">MOCK INTERVIEW FEEDBACK</h2>
      {isLoading && <Loader />}
      {feedbackList.length === 0 ? (
        <div className="m-5 flex items-center justify-center">
          <p className="text-center w-full rounded-xl p-2 m-3 bg-red-100 border-red-400 text-red-700">
            No feedback available yet
          </p>
        </div>
      ) : (
        generateFeedbackList(feedbackList)
      )}
    </>
  );
};

export default InterviewFeedback;
