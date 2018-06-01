import React from 'react';

const Scoreboard = props => {
  return(
    <div>
      <h3 className="card-header">Stats</h3>
      <div className="card-body">
        <div className="text-success">Question:</div> {props.questionNumber}/{props.totalCount}<br/>
        <div className="text-success">Category:</div> {props.category}<br/>
        <div className="text-success">Difficulty:</div> {props.difficulty}<br/>
        <div className="text-success">Score:</div> Correct: {props.correctCount}   Incorrect: {props.incorrectCount}<br/><br/>
        <button type="button" className="btn btn-outline-primary" onClick={()=> props.redirect()}>Change Settings</button>
      </div>
    </div>
  )
}

export default Scoreboard;
