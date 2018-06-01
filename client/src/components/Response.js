import React from 'react';

const NextQuestion = props =>
  <button type="button" className="btn btn-outline-success" onClick={props.handleNextClick}>
    Next Question
  </button>

const CorrectAnswer = props =>
  <div>
    <b className="text-primary">Correct Answer:</b> {props.answer} <br/><br/>
  </div>

const Response = props => {
  return (
    <div>
      <h5 className="text-success">{props.response}</h5><br/>
      {props.response === "Incorrect" ? <CorrectAnswer answer={props.answer}/> : null}
      <NextQuestion handleNextClick={props.handleNextClick}/>

    </div>
  )
}

export default Response;
