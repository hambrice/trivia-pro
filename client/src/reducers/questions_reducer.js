export default (state = {}, action) => {
  switch (action.type) {

    case 'FETCH_QUESTIONS':
      return {
        allQuestions: action.payload,
        currentQuestion: action.payload[0],
        questionCount:action.payload.length
      };

    case 'NEXT_QUESTION':
      const nextKey = action.count;
      return {
        ...state,
        currentQuestion: state.allQuestions[nextKey]
      };

    default:
      return state;
  }
};
