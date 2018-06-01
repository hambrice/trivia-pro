import React from 'react';

const Scoreboard = props => {
  return(
    <div>
      <h3 className="card-header">Stats</h3>
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
