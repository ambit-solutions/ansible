var express = require('express');
var app = express();
var os = require("os");
var hostname = os.hostname();

app.get('/', function (req, res) {
  res.send('Hello ' + hostname);
});

var server = app.listen(8000, '127.0.0.1', function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

