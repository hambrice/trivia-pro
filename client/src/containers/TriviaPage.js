import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Question from '../components/Question'
import {fetchQuestions} from '../actions/questionActions';

const CorrectResponse = (props) => {
  <div>
    <div>Correct!</div>
    <button>Next Question</button>
  </div>
}
class TriviaPage extends React.Component {
  constructor() {
    super();
    this.state = {
      renderResult: null
    }
  }
  componentDidMount(){
    this.props.fetchQuestions();
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
  renderResults = () => {
    switch(this.state.renderResult){
      case 'correct':
      debugger;
      return( <CorrectResponse />
        )
      case 'incorrect':
      return(
        <div>
          <div>Incorrect</div>
          <button>Next Question</button>
        </div>)

    }
    // if (boolean) {
    //   return(
    //     <div>Correct!</div>
    //   )
    // } else {
    //   return(
    //     <div>Incorrect</div>
    //   )
    // }
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
  return {
    questions: state.questions,
    currentQuestion: state.questions[0]
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchQuestions
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TriviaPage);
