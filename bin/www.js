var express = require('express'),
    app = express(),
    server = require('http').createServer(app);

server.listen(3000);

app.get('/', function(req, res) {  
	res.send("Hello Jay!!!!");
});