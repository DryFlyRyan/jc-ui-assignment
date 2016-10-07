const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  PORT = 3004;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

const
  data = require('./data/todos')
  routes = require('./controllers/todos')(data);

// ToDo API routes
app.get('/api/todos', routes.getAll);
app.get('/api/todos/:id', routes.getOne);
app.post('/api/todos', routes.create);
app.put('/api/todos/:id', routes.update);
app.delete('/api/todos/:id', routes.delete);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );
