import React from 'react';


class Question extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.question.question !== nextProps.question.question;
  }

  callApi = () => {
    console.log('a')
    const settings = {questionAmount: 1, category: "General Knowledge"}
    const settingsString = JSON.stringify(settings)
    fetch(`/questions/${settingsString}`).then(response => {
      if(response.status !== 200) {
        throw new Error(response.error)
      } else {
      console.log('b')
      return response.json()}}).then(data => console.log('c', data)).catch(error => console.log('d', error))
      console.log('e')

    }

  getAnswers = (answers, handler) =>
    <table className="table-hover" style={{float:"none", margin:"0 auto"}}>
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
