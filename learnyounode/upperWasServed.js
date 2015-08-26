var http = require('http');
var map = require('through2-map');


http.createServer(function callback (req, res) {
	
	req.setEncoding('utf8');
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res);

}).listen(process.argv[2]);
