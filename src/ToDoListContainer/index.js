import { connect } from 'react-redux';
import { 
  getAllTodos, 
  createTodo, 
  toggleTodo, 
  editTodo, 
  deleteTodo 
} from '../services/todo/actions'

import ToDoList from './ToDoList'

const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllTodos: dispatch(getAllTodos()),
    onTodoClick: (id, done) => {
      dispatch(toggleTodo(id, done))
    },
    onTodoEditSubmit: (id, description) => {
      dispatch(editTodo(id, description))
    },
    onTodoNewSubmit: (description) => {
      dispatch(createTodo(description))
    },
    onTodoDelete: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default ToDoListContainer;