import React from 'react';

const SplashPage = () =>
<div className="jumbotron">
<h1 className="display-3">Welcome to TriviaPro!</h1>
<p className="lead">A trivia game built with the magic of React.</p>
<hr className="my-4" />
<p>TriviaPro uses trivia questions provided by the <a href="https://opentdb.com/">Open Trivia Database</a>.
TriviaPro begins with 20 questions, choosing questions at random from various question categories.
To change the amount of questions or pick a specific category of questions, simply click on "Change Settings".</p>
<p className="lead">
  <a className="btn btn-primary btn-lg" href="/game" role="button">Lets Get Started!</a>
</p>
</div>


export default SplashPage
