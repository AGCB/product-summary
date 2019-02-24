import { combineReducers } from 'redux'
import pricing from './pricing'
import toggleSavingsInfo from './toggleSavingsInfo';

export default combineReducers({
  pricing,
  toggleSavingsInfo
})
