import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useQuizScoreContext } from "../contexts/QuizScoreContext";

const Question = ({ data, index }) => {
  const [answer, setAnswer] = useState("");
  const [isAnsweredCorrect, setIsAnsweredCorrect] = useState("");
  const { scoreState, dispatch } = useQuizScoreContext();
  const checkAnswer = (correctAnswer, enteredAnswer) => {
    let correct = false;
    correct = correctAnswer.toLowerCase() === enteredAnswer.toLowerCase();
    if (correct) {
      setIsAnsweredCorrect("correct");
      dispatch({ type: "UPDATE" });
    } else setIsAnsweredCorrect("inCorrect");
  };

  return (
    <div>
      <div className="flex items-start gap-2 mb-2">
        <p className="">{`${index + 1}. ${data.question}`}</p>
        {isAnsweredCorrect === "correct" && (
          <TiTick color="green" size="2rem" />
        )}
        {isAnsweredCorrect === "inCorrect" && (
          <ImCross color="red" size="1.5rem" />
        )}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-end gap-1">
          <label htmlFor="answer">Answer: </label>
          <input
            type="text"
            name="answer"
            id={`answer${index}`}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="bg-gray-50 inline border-b border-b-gray-700 text-gray-900 text-md pt-2.5 px-2 pb-1 dark:text-white w-[300px] active:outline-none focus:outline-none"
            style={{ borderColor: `${isAnsweredCorrect === "unAns" && "red"}` }}
          />
        </div>
        <button
          className="bg-blue-500 inline hover:bg-blue-700 text-white p-2 rounded ml-5"
          onClick={() => {
            answer === "" && setIsAnsweredCorrect("unAns");
            checkAnswer(data.answer, answer);
          }}
          disabled={isAnsweredCorrect === "correct"}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Question;
