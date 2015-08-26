var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', process.argv[3] || path.join(__dirname, 'templates'));

app.get('/home', function callback (req, res) {
	
	res.render('index', {date: new Date().toDateString()});
}).listen(process.argv[2]);
