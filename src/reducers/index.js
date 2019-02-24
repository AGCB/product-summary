import { combineReducers } from 'redux'
import pricing from './pricing'
import toggleSavingsInfo from './toggleSavingsInfo';
import itemDetails from './itemDetails';

export default combineReducers({
  pricing,
  toggleSavingsInfo,
  itemDetails
})
