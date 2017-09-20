

import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import Api from './api';
import {
  FETCH_ALL,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,

  CREATE,
  CREATE_SUCCESS,
  CREATE_FAILURE,

  DELETE,
  DELETE_SUCCESS,
  DELETE_FAILURE,

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
      type: CREATE_SUCCESS,
      payload: {
        todo: todo
      }
    })
  } catch (error) {
    yield put({
      type: CREATE_FAILURE,
      error: error
    })
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
    yield put({
      type: UPDATE_FAILURE,
      error: error
    })
  }
}

export const deleteTodo = function*(action) {
  try{
    yield responseHandler(Api.deleteTodo, action.payload.id);
    yield put({
      type: DELETE_SUCCESS,
      payload: {
        id: action.payload.id
      } 
    })
  }
  catch (error) {
    yield put({
      type: DELETE_FAILURE,
      error: error
    })
  }
}

export const todoSagas = [
  takeEvery(FETCH_ALL, getAllTodos),
  takeLatest(CREATE, createTodo),
  takeLatest(UPDATE, updateTodo),
  takeLatest(DELETE, deleteTodo)
];
