import 'isomorphic-fetch';

export function fetchQuestions(settings) {
  return dispatch => {
    dispatch({type: 'LOADING_QUESTIONS'});
    const settingsString = JSON.stringify(settings)
    return fetch(`/questions/${settingsString}`).then(response => response.json()).then(data => {
      dispatch({type: 'FETCH_QUESTIONS', payload: data});
    });
  };
}

export function nextQuestion(questionAmount) {
  return {
    type: "NEXT_QUESTION",
    count: questionAmount
  }
}
