import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Question from '../components/Question'
import {fetchQuestions, removeQuestion} from '../actions/questionActions';

const NextQuestion = (props) => <button onClick={props.handleNextClick}> NextQuestion </button>

const Response = (props) => {
  return (
    <div>
      <div>{props.response}</div>
      <NextQuestion handleNextClick={props.handleNextClick}/>
    </div>
  )
}


class TriviaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderResult: null
    }
  }
  componentDidMount(){
    this.props.fetchQuestions()
  }

shuffleAnswers = (question) => {
  const answers = [question.correct_answer, ...JSON.parse(question.incorrect_answers)]
      for (let i = answers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [answers[i], answers[j]] = [answers[j], answers[i]];
      }
      return answers
  }

  findAnswer = (answer) => answer === this.props.currentQuestion.correct_answer

  handleAnswerClick = (event) => {
    if (!this.state.renderResult) {
      if (this.findAnswer(event.target.innerText)) {
        event.target.style.fontWeight = "900"
        this.setState({
          renderResult: 'correct'
        })
      } else {
        this.setState({
          renderResult: 'incorrect'
        })
      }
    }
  }

  handleNextClick = (event) => {
    debugger;
    this.props.removeQuestion()
  }
  renderResults = () => {
    switch(this.state.renderResult){
      case 'correct':
      return( <Response response="Correct!" handleNextClick={this.props.removeQuestion}/>
        )
      case 'incorrect':
      return(
        <Response response="Incorrect" handleNextClick={this.props.removeQuestion}/>
      )

    }
  }

  render() {
    return(
      <div>
        {this.props.currentQuestion ? <Question question={this.props.currentQuestion} answers={this.shuffleAnswers(this.props.currentQuestion)} handleAnswerClick={this.handleAnswerClick}/> : "Loading"}
        {this.renderResults()}
      </div>
    )
  }

}

function mapStateToProps(state){
  debugger;
  return {
    currentQuestion: state.questions.currentQuestion,
    questionCount: state.questions.questionCount
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchQuestions,
    removeQuestion
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TriviaPage);
