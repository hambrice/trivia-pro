export default (state = [], action) => {
  switch (action.type) {

    case 'FETCH_QUESTIONS':
      return {allQuestions:action.payload, currentQuestion:action.payload[0], questionCount:action.payload.length}

    case 'REMOVE_QUESTION':
      return state.filter(question => question.id !== action.questionId)

    default:
      return state;
  }
};
