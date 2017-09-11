/**
 * Root Saga
 * 
 * Probably still overkill for this little thing. But this will make it easy
 * to add new stuff to the todo list should we want to add auth, user details,
 * recipes, a myspace/geocities combo, tinder for mennonites, etc.
 */


import { all } from 'redux-saga/effects';
import { todoSagas } from '../todo/sagas';

export default function* rootSaga() {
  yield all([...todoSagas])
};