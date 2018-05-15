import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Question from '../components/Question'

class TriviaPage extends React.Component {

  render() {
    return(
      <div>
        <Question />
      </div>
    )
  }

}

function mapStateToProps(state){
  return {questions: state}
}
export default TriviaPage;
