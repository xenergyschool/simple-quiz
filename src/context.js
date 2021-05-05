import axios from "axios";
import React, { useState, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const defaultState = {
    numOfQuestions: 10,
    category: "sports",
    difficulty: "easy",
    currentQuestion: 0,
    rightAnswers: 0,
    wrongAnswers: 0,
    isStarted: false,
    isFinished: false,
    questions: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const getQuestions = async () => {
    setIsLoading(true);
    const newUrl = `category=${table[state.category]}&difficulty=${
      state.difficulty
    }&amount=${state.numOfQuestions}`;
    await axios.get(`${API_ENDPOINT}${newUrl}`).then((res) => {
      console.log(res.data.results);
      dispatch({ type: "set_questions", payload: res.data.results });
    });
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{ state, dispatch, getQuestions, isLoading, setIsLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
