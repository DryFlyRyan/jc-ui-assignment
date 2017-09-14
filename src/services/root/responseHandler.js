/**
 * Saga Response Handler
 * 
 * This is probably overkill for the todo project, but I wanted to practice a bit
 * with some response handling for redux sagas (which I also wanted some practice
 * with).
 * 
 * In a fully-fledged version of this, we would put all our response error handling
 * in here and it would communicate to the saga methods.
 * 
 * Plus, generator functions are pretty cool.
 */

import { call, put } from 'redux-saga/effects';

const responseHandler = function*(fn, ...rest) {
  const response = yield call(fn, ...rest);
  const json = yield response.json();
  const code = yield response.status;

  switch (code) {
    default:
      return json;
  }
}

export default responseHandler;