import React from 'react';
// TODO: jwaterman iterate through this array instead
const options = [
  {
    value: 'General Knowledge',
    text: 'General Knowledge'
  }
];
const SettingsForm = (props) =>
  <form onSubmit={props.handleSubmitClick}>
    <div>
      <label>Question Amount:</label>
      <input type="number" name="question-amount" onChange={props.handleChange}/>
    </div>
    <div>
      <label>Category:</label>
      <select>
        <option value="random">Random</option>
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
    <input type="submit" className="btn btn-outline-success" value="Update Settings" />
  </form>

  export default SettingsForm;
