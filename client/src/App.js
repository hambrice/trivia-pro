import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchQuestions} from './actions/questionActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TriviaPage from './containers/TriviaPage';

class App extends Component {

  componentDidMount(){
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div className="App">
        <TriviaPage />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
