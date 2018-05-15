export default (state = {questions: []}, action) => {
  switch (action.type) {

    case 'FETCH_QUESTIONS':
      return Object.assign({}, state, {pictures: action.payload})

    default:
      return state;
  }
};
