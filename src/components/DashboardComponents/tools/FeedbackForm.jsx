import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
const FeedbackForm = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState("");
  const [communicationSkill, setCommunicationSkill] = useState(0);
  const [technicalSkills, setTechnicalSkills] = useState(0);
  const [learningAttitude, setLearningAttitude] = useState(0);
  const [problemSolving, setProblemSolving] = useState(0);
  const [behaviour, setBehaviour] = useState(0);
  const [link, setLink] = useState("");
  const [feedback, setFeedback] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    try {
      if (email === "" || feedback === "") {
        throw new Error("Email and feedback both are required");
      }
      setIsSubmitting(true);
      setTimeout(
        () =>
          console.table({
            email,
            communicationSkill,
            technicalSkills,
            learningAttitude,
            problemSolving,
            behaviour,
            link,
            feedback,
          }),
        [5000]
      );
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      enqueueSnackbar(error.message, {
        variant: "warning",
      });
    }
  };
  return (
    <div className="dark:text-white p-8">
      <h2 className="text-center mt-3 mb-5 dark:text-white text-4xl">
        Interview feedback form
      </h2>
      <div className="flex items-center justify-center">
        <form className="w-full max-w-lg" onSubmit={handleFeedbackSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 dark:text-white dark:bg-gray-700 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="communicationSkill"
              >
                Communication skills
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 dark:text-white dark:bg-gray-700 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="communicationSkill"
                value={communicationSkill}
                onChange={(e) => setCommunicationSkill(e.target.value)}
                type="number"
                min={0}
                max={10}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="technicalSkills"
              >
                Technical Skills
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 dark:text-white dark:bg-gray-700 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="technicalSkills"
                value={technicalSkills}
                onChange={(e) => setTechnicalSkills(e.target.value)}
                type="number"
                min={0}
                max={10}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="learningAttitude"
              >
                Learning Attitude
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 dark:text-white dark:bg-gray-700 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="learningAttitude"
                value={learningAttitude}
                onChange={(e) => setLearningAttitude(e.target.value)}
                type="number"
                min={0}
                max={10}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="problemSolving"
              >
                Problem Solving
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 dark:text-white dark:bg-gray-700 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="problemSolving"
                value={problemSolving}
                onChange={(e) => setProblemSolving(e.target.value)}
                type="number"
                min={0}
                max={10}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="behaviour"
              >
                Behaviour
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 dark:text-white dark:bg-gray-700 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="behaviour"
                value={behaviour}
                onChange={(e) => setBehaviour(e.target.value)}
                type="number"
                min={0}
                max={10}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="link"
              >
                Interview recording link
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 dark:text-white dark:bg-gray-700 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="link"
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                htmlFor="feeback"
              >
                Overall Feedback
              </label>
              <textarea
                className=" no-resize appearance-none block w-full dark:text-white bg-gray-200 dark:bg-gray-700 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40 resize"
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-2/5">
              {!isSubmitting ? (
                <button
                  className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Submit
                </button>
              ) : (
                <button
                  disabled
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;