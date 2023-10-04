import React, { createContext, useContext } from "react";
import { useReducer } from "react";
import jwtDecode from "jwt-decode";

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
        user: newUser,
      };

    // case "VALIDATE-TOKEN":
    //   const currentToken = localStorage.getItem("token");
    //   if (currentToken) {
    //     const currentPayload = currentToken.split(".")[1];
    //     const currentDate = new Date();
    //     const currentUser = JSON.parse(Buffer.from(currentPayload, "base64"));
    //     const tokenExpDate = new Date(currentUser.exp * 1000);
    //     const timeDiff = currentDate.getTime() - tokenExpDate.getTime();
    //     const daysDiff = timeDiff / (1000 * 3600 * 24);

    //     if (daysDiff < 1) {
    //       return {
    //         ...state,
    //         user: currentUser,
    //       };
    //     }
    //   }
    //   localStorage.clear();
    //   return {
    //     ...state,
    //     user: null,
    //   };

    case "RELOAD":
      const existingToken = localStorage.getItem("token");
      if (existingToken) {
        const encPayload = existingToken.split(".")[1];
        const existingUser = JSON.parse(Buffer.from(encPayload, "base64"));

        return {
          ...state,
          user: existingUser,
        };
      } else {
        return {
          ...state,
          user: null,
        };
      }

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        token: null,
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
