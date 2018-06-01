import React from 'react';

const Scoreboard = props => {
  return(
    <div>
      <h3 className="card-header">Stats</h3>
      <div className="card-body">
        <div className="text-primary">Question:</div> {props.questionNumber}/{props.totalCount}<br/>
        <div className="text-primary">Category:</div> {props.category}<br/>
        <div className="text-primary">Difficulty:</div> {props.difficulty}<br/>
        <div className="text-primary">Score:</div> Correct: {props.correctCount}   Incorrect: {props.incorrectCount}<br/><br/>
        <button type="button" className="btn btn-outline-success" onClick={()=> props.redirect()}>Change Settings</button>
      </div>
    </div>
  )
}

export default Scoreboard;
