import React from 'react';

const Scoreboard = (props) => {
  return(
    <div>
      <h3>Stats</h3>
      Category: {props.category}<br/>
      Question: {props.questionNumber}/{props.totalCount}<br/>
      Correct: {props.correctCount}   Incorrect: {props.incorrectCount}<br/><br/>
    </div>
  )
}

export default Scoreboard;
