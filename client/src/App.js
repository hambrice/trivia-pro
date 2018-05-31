import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchQuestions} from './actions/questionActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TriviaPage from './containers/TriviaPage';
import SettingsPage from './containers/SettingsPage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'
class App extends Component {


  //Don't use Navbar; instead link to game on home page, link to settings page in stats div
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={TriviaPage} />
          <Route exact path="/settings" component={SettingsPage} />
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
