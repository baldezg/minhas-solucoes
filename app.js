const express = require('express');
const app = express();
const routes = require('./routes/main');

app.set('view engine', 'jade');

app.use(express.json());                  
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.use(`/`, routes);

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});