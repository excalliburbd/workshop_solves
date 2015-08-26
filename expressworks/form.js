var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function callback (req, res) {
	var str = req.body.str;
	var temp = '';
	for(var i=str.length-1; i >= 0; i--) {
		
		temp += str.charAt(i);
	}
	res.end(temp);
}).listen(process.argv[2]);
