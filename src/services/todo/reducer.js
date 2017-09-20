/**
 * Todo Reducer
 * 
 * Modify all the todo stuff.
  */

import {
  FETCH_ALL_SUCCESS,
  CREATE_SUCCESS,
  DELETE_SUCCESS,
  UPDATE_SUCCESS
} from '../actionTypes';

const initialState = {
  todos: []
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_SUCCESS:

      return {
        ...state,
        todos: [...action.payload.todos]
      }
    case CREATE_SUCCESS:

      console.log('create', state, action)
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      }

    case UPDATE_SUCCESS:

      const updatedTodos = state.todos.map(todo => 
        (todo.id === action.payload.todo.id)
        ? {
          ...todo, 
          done: action.payload.todo.done,
          description: action.payload.todo.description
        } : 
        todo
      )

      return {
        ...state,
        todos: updatedTodos
      }
    case DELETE_SUCCESS:

      const filteredTodos = state.todos.filter((todo) => {
        return todo.id !== action.payload.id ? true : false;
      })
      
      return {
        ...state,
        todos: filteredTodos
      }
    default: 
      return state;
  }
};

export default todo;