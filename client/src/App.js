import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchQuestions} from './actions/questionActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TriviaPage from './containers/TriviaPage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'
class App extends Component {

  // componentDidMount(){
  //   this.props.fetchQuestions();
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <TriviaPage />
          </div>
      </Router>
    );
  }
}
// function mapStateToProps(state){
//   return {questions: state.questions}
// }
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchQuestions
//   }, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App
