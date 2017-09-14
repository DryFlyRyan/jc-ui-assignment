import rootAPI from '../root/rootApi';

export class TodoApi {
  constructor(rootAPI) {
    this.api = rootAPI;
  }
  getAllTodos = () => {
    return this.api
      .get(`http://localhost:3004/api/todos`, {
        headers: new Headers({
          Accept: 'application/json'
        }),
        credentials: 'same-origin'
      })
      .then(res => res);
  };
  createTodo = (data) => {
    return this.api
      .post(`http://localhost:3004/api/todos`, {
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }),
        credentials: 'same-origin',
        body: JSON.stringify(data)
      })
  }
  updateTodo = (id, data) => {
    return this.api
      .put(`http://localhost:3004/api/todos/${id}`, {
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }),
        credentials: 'same-origin',
        body: JSON.stringify(data)
      })
      .then(res => res); 
  };
  deleteTodo = (id) => {
    return this.api
      .delete(`http://localhost:3004/api/todos/${id}`, {
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }),
        credentials: 'same-origin'
      })
      .then(res => res);
  }
}

export default new TodoApi(rootAPI);