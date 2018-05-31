import React from 'react';

const Scoreboard = (props) => {
  return(
    <div>
      <h3>Stats</h3>
      Question: {props.questionNumber}/{props.totalCount}<br/>
      Category: {props.category}<br/>
      Difficulty: {props.difficulty}<br/>
      Correct: {props.correctCount}   Incorrect: {props.incorrectCount}<br/><br/>
    </div>
  )
}

export default Scoreboard;
