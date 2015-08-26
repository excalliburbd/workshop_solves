var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

	res.writeHead(200, { 'Content-Type': 'application/json' });
	
	var useful = url.parse(req.url, true);
	var date = new Date(useful.query.iso);

	if(useful.pathname === '/api/parsetime'){
	

		 res.end(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
			}));


	}else {

		res.end(JSON.stringify({ "unixtime": date.getTime() }));

		
	}

}).listen(process.argv[2]);
