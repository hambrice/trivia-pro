export default (state = {questionAmount: 20, category: "random", difficultyMode: "off"}, action) => {
  switch (action.type) {

    case 'CHANGE_SETTINGS':
      return {questionAmount: action.settings.questionAmount, category: action.settings.category, difficultyMode: action.settings.difficultyMode}

    default:
      return state;
  }
};
