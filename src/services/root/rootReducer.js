/**
 * Root Reducer
 * 
 * Smash some stores together!
 */

import { combineReducers } from 'redux';
import todo from '../todo/reducer';

export default combineReducers({
  todo
})