import React, { createContext, useContext } from "react";
import { useReducer } from "react";

const QuizScoreContext = createContext();
const initialState = {
  score: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      let newScore = state.score + 1;
      return {
        ...state,
        score: newScore,
      };
    default:
      return state;
  }
};

export const QuizScoreContextProvider = ({ children }) => {
  const [scoreState, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizScoreContext.Provider value={{ scoreState, dispatch }}>
      {children}
    </QuizScoreContext.Provider>
  );
};

export const useQuizScoreContext = () => useContext(QuizScoreContext);
