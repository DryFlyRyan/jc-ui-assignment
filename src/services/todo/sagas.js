

import { takeEvery, put, select } from 'redux-saga/effects';
import Api from './api';
import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_FAILURE,

  FETCH_ALL,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,

  CREATE,
  CREATE_SUCCESS,
  CREATE_FAILURE,

  TOGGLE_TODO,
  TOGGLE_TODO_SUCCESS,

  DELETE,
  DELETE_SUCCESS,

  UPDATE,
  UPDATE_SUCCESS,
  UPDATE_FAILURE
} from '../actionTypes';
import responseHandler from '../root/responseHandler';


export const getAllTodos = function*(action) {
  try {
    const response = yield responseHandler(Api.getAllTodos);
    const [...todos] = yield response.todos;
    yield put({
      type: FETCH_ALL_SUCCESS,
      payload: {
        todos
      }
    })
  } catch (error) {
    yield put({
      type: FETCH_ALL_FAILURE,
      error: error
    })
  }
}

export const createTodo = function*(action) {
  try {
    const response = yield responseHandler(Api.createTodo, action.payload);
    const todo = yield response;
    yield put({
      type: FETCH_ALL
    })
  } catch (error) {
    
  }
}

export const updateTodo = function*(action) {
  try {
    const response = yield responseHandler(Api.updateTodo, action.payload.id, action.payload);
    const todo = yield response;
    yield put({
      type: UPDATE_SUCCESS,
      payload: {
        todo
      }
    })
  }
  catch (error) {

  }
}

export const deleteTodo = function*(action) {
  try{
    const response = yield responseHandler(Api.deleteTodo, action.payload.id);
    yield put({
      type: FETCH_ALL
    })
  }
  catch (error) {

  }
}

export const todoSagas = [
  takeEvery(FETCH_ALL, getAllTodos),
  takeEvery(CREATE, createTodo),
  takeEvery(UPDATE, updateTodo),
  takeEvery(DELETE, deleteTodo)
];
