export default (state = [], action) => {
  switch (action.type) {

    case 'FETCH_QUESTIONS':
      return action.payload

    case 'REMOVE_QUESTION':
      return state.filter(question => question.id !== action.questionId)

    default:
      return state;
  }
};
