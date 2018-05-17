import 'isomorphic-fetch';

export function fetchQuestions() {
  return(dispatch) => {
    dispatch({type: 'LOADING_QUESTIONS'});
    return fetch('/questions').then(response => response.json()).then(data => {
      dispatch({type: 'FETCH_QUESTIONS', payload: data})
    })
  }
}

export function removeQuestion(question) {
  return {
    type: "REMOVE_QUESTION",
    questionId: question.id
  }
}

export function nextQuestion(questionNumber) {
  return {
    type: "NEXT_QUESTION",
    questionKey: questionNumber
  }
}
