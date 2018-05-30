import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Question from '../components/Question'
import {fetchQuestions, nextQuestion} from '../actions/questionActions';
import Response from '../components/Response';
import Scoreboard from '../components/Scoreboard';



class TriviaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderResult: null,
      correctCount: 0,
      incorrectCount: 0,
      questionNumber: 1
    }
  }
  componentDidMount(){
    this.props.fetchQuestions(this.props.)
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
        this.setState({
          renderResult: 'correct',
          correctCount: this.state.correctCount + 1,
          questionNumber: this.state.questionNumber + 1
        })
      } else {
        this.setState({
          renderResult: 'incorrect',
          incorrectCount: this.state.incorrectCount + 1,
          questionNumber: this.state.questionNumber + 1

        })
      }
    }
  }

  handleNextClick = (event) => {
    this.props.nextQuestion()
    this.setState({
      renderResult: null
    })
  }
  renderResults = () => {
    switch(this.state.renderResult){
      case 'correct':
      return( <Response response="Correct!" handleNextClick={this.handleNextClick}/>
        )
      case 'incorrect':
      return(
        <Response response="Incorrect" handleNextClick={this.handleNextClick}/>
      )

    }
  }

  render() {
    debugger;
    // Loading shows when out of questions (can be used for game over instead)
    return(
      <div>
        {this.props.currentQuestion ? <Scoreboard category={this.props.currentQuestion.category} questionNumber={this.state.questionNumber} totalCount={this.props.questionCount} correctCount={this.state.correctCount} incorrectCount={this.state.incorrectCount}/> : <Scoreboard category="" questionNumber="--" totalCount="--" correctCount={this.state.correctCount} incorrectCount={this.state.incorrectCount}/>}
        {this.props.currentQuestion ? <Question question={this.props.currentQuestion} answers={this.shuffleAnswers(this.props.currentQuestion)} handleAnswerClick={this.handleAnswerClick}/> : "Loading"}
        {this.renderResults()}
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    currentQuestion: state.questions.currentQuestion,
    questionCount: state.questions.questionCount,
    settings: state.settings
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchQuestions,
    nextQuestion
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TriviaPage);
