import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Question from '../components/Question'
import {fetchQuestions} from '../actions/questionActions';


class TriviaPage extends React.Component {
  componentDidMount(){
    this.props.fetchQuestions();
  }
  render() {
    return(
      <div>
        {this.props.questions[0] ? <Question question={this.props.questions[0]}/> : "Loading"}
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
