import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import {fetchQuestions} from './actions/questionActions';
import TriviaPage from './containers/TriviaPage';
import SettingsPage from './containers/SettingsPage';
import NavBar from './components/NavBar';


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

export default App
