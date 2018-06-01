import React from 'react';
import options from '../helpers/CategoryOptions';
// TODO: jwaterman iterate through this array instead

const SettingsForm = (props) =>
  <form onSubmit={props.handleSubmitClick}>
    <div>
      <label>Question Amount:</label>
      <input type="number" name="question-amount" onChange={props.handleChange}/>
    </div>
    <div>
      <label>Category:</label>
      <select>
      {options.map((option, key) =>
        <option key={key} value={option.value}>{option.text}</option>
        )
      }
      </select>
    </div>
    <input type="submit" className="btn btn-outline-success" value="Update Settings" />
  </form>

  export default SettingsForm;
