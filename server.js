var http = require('http')
var port = process.env.PORT || '3500';
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  var todayTime = new Date().toLocaleTimeString( );
  res.end('Time on the server is: ' + todayTime);
}).listen(port);
console.log('Server is now running on port ' + port);