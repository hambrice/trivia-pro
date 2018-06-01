import React from 'react';

// TODO: jwaterman Make this a class method similar to renderResults
const Answers = props =>
<ul className="list-unstyled">
  {props.answers.map((answer,key) => <li key={key} onClick={props.handleAnswerClick}>{answer}</li>)}
</ul>

class Question extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.question.question !== nextProps.question.question;
  }


  render() {
    return(
        <div className="card-body">
        <h5 className="card-title">{this.props.question.question}</h5>
          <Answers answers={this.props.answers} handleAnswerClick={this.props.handleAnswerClick}/>
        </div>
    )
  }
}


export default Question;
