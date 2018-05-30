export default (state = {questionAmount: 20, category: "random", difficultyMode: "off"}, action) => {
  switch (action.type) {

    case 'CHANGE_SETTINGS':
      return action.settings

    default:
      return state;
  }
};
