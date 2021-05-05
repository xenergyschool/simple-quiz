import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { state, dispatch, getQuestions } = useGlobalContext();
  const handleStart = (e) => {
    e.preventDefault();
    getQuestions();
    dispatch({ type: "start_quiz" });
  };
  return (
    <section className="quiz quiz-small">
      <h2>setup quiz</h2>
      <form className="setup-form">
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input
            type="number"
            name="numOfQuestions"
            id="amount"
            min="1"
            max="50"
            className="form-input"
            value={state.numOfQuestions}
            onChange={(e) =>
              dispatch({
                type: "change_setup",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="form-input"
            value={state.category}
            onChange={(e) =>
              dispatch({
                type: "change_setup",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="difficulty">select difficulty</label>
          <select
            name="difficulty"
            id="diffulclty"
            className="form-input"
            value={state.difficulty}
            onChange={(e) =>
              dispatch({
                type: "change_setup",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button className="submit-btn" onClick={handleStart}>
          start
        </button>
      </form>
    </section>
  );
};

export default SetupForm;
