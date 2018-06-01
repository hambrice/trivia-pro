import React from 'react';

const Scoreboard = (props) => {
  return(
    <div className="card border-success mb-3 col-4" style={{maxWidth: "20rem;"}}>
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
