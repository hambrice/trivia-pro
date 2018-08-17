import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import SplashPage from './components/SplashPage';
import { fetchQuestions } from './actions/questionActions';
import TriviaPage from './containers/TriviaPage';
import SettingsPage from './containers/SettingsPage';
import NavBar from './components/NavBar';


class App extends Component {

  componentDidMount() {
    const { fetchQuestions, settings } = this.props;

    fetchQuestions(settings);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={SplashPage} />
          <Route exact path="/game" component={TriviaPage} />
          <Route exact path="/settings" component={SettingsPage} />
          </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return {
    settings: state.settings
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchQuestions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
