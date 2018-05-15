export default (state = [], action) => {
  switch (action.type) {

    case 'FETCH_QUESTIONS':
      return state = action.payload

    default:
      return state;
  }
};
