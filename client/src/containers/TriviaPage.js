import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Question from '../components/Question'
import {fetchQuestions} from '../actions/questionActions';


class TriviaPage extends React.Component {
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
  render() {
    const currentQuestion = this.props.questions[0]
    return(
      <div>
        {currentQuestion ? <Question question={currentQuestion} answers={this.shuffleAnswers(currentQuestion)}/> : "Loading"}
      </div>
    )
  }

}

function mapStateToProps(state){
  return {questions: state.questions}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchQuestions
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TriviaPage);
