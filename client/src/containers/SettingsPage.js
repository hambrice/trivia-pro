import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSettings } from '../actions/settingsActions';
import SettingsForm from '../components/SettingsForm';

class SettingsPage extends React.Component{

  handleSubmitClick = event => {
    event.preventDefault();
    const object = {}
    const inputs = event.target.getElementsByTagName("input")
    object.questionAmount = parseInt(inputs[0].value, 10)
    object.category = event.target.getElementsByTagName("select")[0].value
    object.difficultyMode = inputs[1].checked
    this.props.changeSettings(object)
    this.props.history.push('/game')
  };

  handleChange = event => {
    this.setState({
      questionAmount: event.target.value
    });
  };

  redirectToGame = () =>
    this.props.history.push('/game');

  render() {
    return(
      <SettingsForm handleSubmitClick={ this.handleSubmitClick } onChange={ this.handleChange } redirect={this.redirectToGame}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeSettings
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
