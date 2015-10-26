var http = require('http')
var port = process.env.PORT || 3500;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world on the training presentation! :)\n');
}).listen(port);