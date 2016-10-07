'use strict';

module.exports = function(todos) {

  var getItem = (id) => new Promise((done, err) => {
    if (!id) err({ code: 500, msg: 'And ID was not supplied' });
    let item = todos.find((i) => i.id === parseInt(id, 10));
    if (!item) err({ code: 404, msg: 'Could not find an item with that ID' });
    done(item);
  });

  var createItem = (data) => new Promise((done, err) => {
    if (!data.description) err({ code: 400, msg: 'Missing parameters' });
    let id = Math.max.apply(null, todos.map((i) => i.id)) + 1;
    let item = { id: id, done: data.done || false, description: data.description };
    todos.push(item);
    done(item);
  });

  return {

    // Gets a list of all the todo items
    getAll: (req, res) => res.status(200).json(todos),

    // Gets a specific todo item, given a supplied ID
    getOne: (req, res) => {
      getItem(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((e) => res.status(e.code).send(e.msg));
    },

    // Create a new todo object and add it to the list
    create: (req, res) => {
      createItem(req.body)
        .then((data) => res.status(200).json(data))
        .catch((e) => res.status(e.code).send(e.msg));
    },

    // Update a todo, given a supplied ID
    update: (req, res) => {
      getItem(req.params.id)
        .then((data) => {
          let todo = Object.assign(data, req.body);
          todos.map((i) => (i === data) ? todo : i);
          return todo;
        })
        .then((data) => res.status(200).json(data))
        .catch((e) => res.status(e.code).send(e.msg));
    },

    // Delete a todo, given a supplied ID
    delete: (req, res) => {
      getItem(req.params.id)
        .then((data) => todos.splice(todos.indexOf(data), 1))
        .then(() => res.status(200).send(true))
        .catch((e) => res.status(e.code).send(e.msg));
    }

  };
};
