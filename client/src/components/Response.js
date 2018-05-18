import React from 'react';

const NextQuestion = (props) => <button onClick={props.handleNextClick}> NextQuestion </button>

const Response = (props) => {
  return (
    <div>
      <div>{props.response}</div>
      <NextQuestion handleNextClick={props.handleNextClick}/>
    </div>
  )
}

export default Response;
