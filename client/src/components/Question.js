import React from 'react';

const Answers = (props) =>
<ol>
  {props.answers.map(answer => <li>{answer}</li>)}
</ol>

const Question = (props) =>
<div>
<strong>{props.question.question}</strong>
<Answers answers={props.answers}/>
</div>

export default Question;
