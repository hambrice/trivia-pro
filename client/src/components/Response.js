import React from 'react';

const NextQuestion = props => <button onClick={props.handleNextClick}> NextQuestion </button>
const CorrectAnswer = props =>
  <div>
    Correct Answer: {props.answer}
  </div>

const Response = props => {
  return (
    <div>
      <div>{props.response}</div><br/>
      {props.response === "Incorrect" ? <CorrectAnswer answer={props.answer}/> : null}
      <NextQuestion handleNextClick={props.handleNextClick}/>

    </div>
  )
}

export default Response;
