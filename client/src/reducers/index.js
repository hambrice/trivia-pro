import { combineReducers } from 'redux';
import questionsReducer from './questions_reducer';
import settingsReducer from './settings_reducer';

export default combineReducers({
  questions: questionsReducer,
  settings: settingsReducer
})
