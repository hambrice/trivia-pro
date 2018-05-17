import React from 'react';

const Answers = (props) =>
<ol>
  {props.answers.map(answer => <li onClick={props.handleAnswerClick}>{answer}</li>)}
</ol>

class Question extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.question.question !== nextProps.question.question
  }

  render() {
    return(
      <div>
      <strong>{this.props.question.question}</strong>
      <Answers answers={this.props.answers} handleAnswerClick={this.props.handleAnswerClick}/>
      </div>
    )
  }
}


export default Question;
