import React, { createContext, useContext, useEffect, useState } from "react";
import { useReducer } from "react";
// import { useToken } from "../utils/custom-hooks/useToken";/

const UserContext = createContext();
const initialState = {
  user: {},
};


const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const newToken = action.payload;
      localStorage.getItem("token", newToken);
      const encodedPayload = newToken.split(".")[1];
      const newUser = JSON.parse(Buffer.from(encodedPayload, "base64"));

      return {
        ...state,
        user: newUser
      };

    case "RELOAD":
      const existingToken = localStorage.getItem("token");
      if (existingToken) {
        const encPayload = existingToken.split(".")[1];
        const existingUser = JSON.parse(Buffer.from(encPayload, "base64"));

        return {
          ...state,
          user: existingUser
        };
      } else {
        return {
          ...state,
          user: null
        }
      }

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
