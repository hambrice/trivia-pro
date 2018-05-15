import 'isomorphic-fetch';

export function fetchQuestions() {
  return(dispatch) => {
    dispatch({type: 'LOADING_QUESTIONS'});
    return fetch('/questions').then(response => response.json()).then(data => {
      debugger;
    })
  }
}
