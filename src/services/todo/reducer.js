/**
 * Todo Reducer
 * 
 * Modify all the todo stuff.
 */

import {
  FETCH_SUCCESS,
  FETCH_ALL_SUCCESS,
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
    case UPDATE_SUCCESS:

      const statemap = state.todos.map(todo => 
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
        todos: statemap
      }
    case DELETE_SUCCESS: 
      
      return {
        ...state,
        todos: [...action.payload.todos]
      }
    default: 
      return state;
  }
};

export default todo;