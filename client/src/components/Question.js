import React from 'react';

// TODO: jwaterman Make this a class method similar to renderResults
const Answers = (props) =>
<ul>
  {props.answers.map((answer,key) => <li key={key} onClick={props.handleAnswerClick}>{answer}</li>)}
</ul>

class Question extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.question.question !== nextProps.question.question;
  }


  render() {
    return(
        <div className="card-body">
          <strong>{this.props.question.question}</strong>
          <Answers answers={this.props.answers} handleAnswerClick={this.props.handleAnswerClick}/>
        </div>
    )
  }
}


export default Question;
