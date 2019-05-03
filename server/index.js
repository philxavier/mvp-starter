var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js').db;
var app = express();
let selectAll = require('../database-mongo/index.js').selectAll

app.use(express.static(__dirname + '/../client/dist'));  

app.listen(3000, function() {
  console.log('listening on port 3000!');
})

app.get('/posts', (req, res) => {
  selectAll()
    .then((result) => {
      // console.log('these are the results', result);
      res.send(result);
    })
    .catch((err) => {
      console.log('there was an error in the server', err)
    })
})