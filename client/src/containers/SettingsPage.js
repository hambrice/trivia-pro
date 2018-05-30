import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeSettings} from '../actions/settingsActions';

//import SettingsForm from '../components/SettingsForm';

const SettingsForm = (props) =>
  <form onSubmit={props.handleSubmitClick}>
    <div>
      <label>Question Amount  </label>
      <input type="number" name="question-amount" onChange={props.handleChange}/>
    </div>
    <div>
      <label>Category  </label>
      <select>
        <option value="Random">Random</option>
        <option value="General Knowledge">General Knowledge</option>
        <option value="Entertainment: Books">Books</option>
        <option value="Entertainment: Film">Films</option>
        <option value="Entertainment: Music">Music</option>
        <option value="Entertainment: Television">Television</option>
        <option value="Entertainment: Video Games">Video Games</option>
        <option value="Science & Nature">Science and Nature</option>
        <option value="Science: Computers">Computers</option>
        <option value="Sports">Sports</option>
        <option value="Geography">Geography</option>
        <option value="History">History</option>
        <option value="Vehicles">Vehicles</option>
        <option value="Entertainment: Japanese Anime & Manga">Japanese Anime and Manga</option>
        <option value="Entertainment: Cartoon & Animations">Cartoon and Animations</option>
      </select>
    </div>
    <div>
      <label>Smart Mode</label>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
    <input type="submit" value="Update Settings" />
  </form>

class SettingsPage extends React.Component{


handleSubmitClick = (event) => {
  const category = event.target.getElementsByTagName("select")[0].value
  const inputs = event.target.getElementsByTagName("input")
  const questionAmount = inputs[0].value
  const gameMode = inputs[1].value

  debugger;
}

handleChange = (event) => {
  this.setState({
    questionAmount: event.target.value
  })
}


  render() {
    debugger;
    return(
      <SettingsForm handleSubmitClick={this.handleSubmitClick} onChange={this.handleChange} />
    )
  }
}
function mapStateToProps(state){
  return {
    settings: state.settings
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeSettings
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
