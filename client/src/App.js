import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchQuestions} from './actions/questionActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
