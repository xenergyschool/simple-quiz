import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { state, dispatch } = useGlobalContext();
  const percentageCorrect =
    (parseInt(state.rightAnswers) / parseInt(state.numOfQuestions)) * 100;
  return (
    <div
      className={
        state.isFinished ? "modal-container isOpen" : "modal-container"
      }
    >
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>You Answered {percentageCorrect} % of questions correctly</p>
        <button
          className="close-btn"
          onClick={() => dispatch({ type: "restart" })}
        >
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
