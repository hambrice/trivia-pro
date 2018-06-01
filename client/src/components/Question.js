import React from 'react';


class Question extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.question.question !== nextProps.question.question;
  }

  getAnswers = (answers, handler) =>
    <table className="tabe table-hover" style={{float:"none", margin:"0 auto"}}>
      <tbody>
        {answers.map((answer,key) =>
          <tr><td key={key} onClick={handler} style={{cursor:"pointer"}}><h5>{answer}</h5></td></tr>
        )}
        </tbody>
        </table>

  render() {
    const { question, answers, handleAnswerClick } = this.props
    return(
        <div className="card-body">
        <h4 className="card-title text-primary">{question.question}</h4>
          {this.getAnswers(answers, handleAnswerClick)}
        </div>
    )
  };
};


export default Question;
