var
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  PORT = 3004;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var data = {
  todos: require('./data/todos')
};

var controllers = {
  todos: require('./controllers/todos')(data.todos)
};

// ToDo API routes
app.get('/api/todos', controllers.todos.getAll);
app.get('/api/todos/:id', controllers.todos.getOne);
app.post('/api/todos', controllers.todos.create);
app.put('/api/todos/:id', controllers.todos.update);
app.delete('/api/todos/:id', controllers.todos.delete);

app.listen(PORT, function() {
});
