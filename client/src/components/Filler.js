import React from 'react';

const GameOver = props =>
  <div className="card-body">
  <h4 className="card-title text-primary">Game Over!</h4><br/> <br/>
    <button type="button" className="btn btn-outline-success" onClick={()=> props.redirect()}>
      Play Again
    </button>
  </div>

  const Loading = () =>
    <div>
      Loading...
    </div>

const Filler = props => {
  return (
    <div>
      {props.fillerText === "Game Over!" ? <GameOver redirect={props.redirect} /> : <Loading /> }
    </div>
  )
}

export default Filler;
