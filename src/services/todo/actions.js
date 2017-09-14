import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE
} from '../actionTypes';

export const getAllTodos = () => ({
  type: FETCH_ALL
});

export const createTodo = (description) => ({
  type: CREATE,
  payload: {
    description
  }
})

export const toggleTodo = (id, done) => ({
  type: UPDATE,
  payload: {
    id,
    done
  }
})

export const editTodo = (id, description) => ({
  type: UPDATE,
  payload: {
    id,
    description
  }
})

export const deleteTodo = (id) => ({
  type: DELETE,
  payload: {
    id
  }
})
