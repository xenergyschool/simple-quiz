import React from "react";
import { useGlobalContext } from "./context";

const Questions = () => {
  const {
    state,
    dispatch,
    getQuestions,
    isLoading,
    setIsLoading,
  } = useGlobalContext();

  const answers_options = [
    ...state.questions[state.currentQuestion].incorrect_answers,
    state.questions[state.currentQuestion].correct_answer,
  ];

  const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const evaluateAns = (e) => {
    console.log(e.target.innerText);
    if (
      e.target.innerText ===
      state.questions[state.currentQuestion].correct_answer
    ) {
      dispatch({
        type: "correct_answer",
        payload: state.rightAnswers,
      });
    }
    nextQuestion();
  };

  const nextQuestion = (e) => {
    if (state.currentQuestion < state.numOfQuestions - 1) {
      dispatch({
        type: "next_active_question",
        payload: state.currentQuestion,
      });
    } else {
      dispatch({
        type: "end_quiz",
      });
    }
  };

  return (
    <>
      <div className="quiz">
        <p className="correct-answers">{`correct answers : ${state.rightAnswers}/${state.currentQuestion}`}</p>
        <article className="container">
          <h2
            dangerouslySetInnerHTML={{
              __html: state.questions[state.currentQuestion].question,
            }}
          />

          {shuffle(answers_options).map((ia, index) => {
            return (
              <button
                key={index}
                className="answer-btn"
                dangerouslySetInnerHTML={{ __html: ia }}
                onClick={evaluateAns}
              />
            );
          })}
        </article>
        <button className="next-question" onClick={nextQuestion}>
          next question
        </button>
      </div>
    </>
  );
};

export default Questions;
