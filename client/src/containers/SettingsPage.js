import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SettingsForm from '../components/SettingsForm';

class SettingsPage extends React.Component{

  render() {
    return(
      <SettingsForm />
    )
  }
}

export default SettingsPage;
