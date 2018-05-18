import React from 'react';

const Scoreboard = (props) => {
  return(
    <div>
      <h3>Stats</h3>
      Category: {props.category}
      {props.questionNumber}/{props.totalCount}
      Correct: {props.correctCount}
      Incorrect: {props.incorrectCount}
    </div>
  )
}

export default Scoreboard;
