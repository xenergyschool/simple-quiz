import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import Questions from "./Questions";

function App() {
  const {
    state,
    dispatch,
    getQuestions,
    isLoading,
    setIsLoading,
  } = useGlobalContext();

  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : state.isStarted ? (
        state.isFinished ? (
          <Modal />
        ) : (
          <Questions />
        )
      ) : (
        <SetupForm />
      )} */}
      {isLoading ? (
        <Loading />
      ) : state.isStarted ? (
        <div>
          <Modal />
          <Questions />
        </div>
      ) : (
        <SetupForm />
      )}
    </>
  );
}

export default App;
