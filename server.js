var
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  PORT = 3004;
  
  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.json());
  
  app.use(function(req, res, next) {
    /** If there were a number of environments (Dev, Test, Prod), it would make sense
     * to have a check for each of those in order for this CORS solution to be more 
     * roboust. Since we don't, we're just allowing for any port on localhost to be
     * used.
    */
    var localhost = 'http://localhost:';
    var origin = req.headers.origin;
    
    // More robust solution than the PR solution
    if(origin.lastIndexOf(localhost) > -1){
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return next();
  });

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
