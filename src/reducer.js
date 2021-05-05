const reducer = (state, action) => {
  switch (action.type) {
    case "start_quiz":
      return {
        ...state,
        isStarted: true,
      };

    case "end_quiz":
      return {
        ...state,
        isFinished: true,
      };

    case "change_setup":
      console.log(`${action.payload.name}${action.payload.value}`);
      return {
        ...state,
        [action.payload.name]: [action.payload.value],
      };

    case "set_questions":
      return {
        ...state,
        questions: action.payload,
      };

    case "next_active_question":
      return {
        ...state,
        currentQuestion: parseInt(action.payload) + 1,
      };

    case "correct_answer":
      return {
        ...state,
        rightAnswers: parseInt(action.payload) + 1,
      };

    case "restart":
      return {
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

    default:
      break;
  }
};

export default reducer;
