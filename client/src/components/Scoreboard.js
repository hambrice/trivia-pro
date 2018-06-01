import React from 'react';

const Scoreboard = (props) => {
  return(
    <div>
      <div className="card-header">Stats</div>
      <div className="card-body">
        Question: {props.questionNumber}/{props.totalCount}<br/>
        Category: {props.category}<br/>
        Difficulty: {props.difficulty}<br/>
        Correct: {props.correctCount}   Incorrect: {props.incorrectCount}<br/><br/>
      </div>
    </div>
  )
}

export default Scoreboard;
