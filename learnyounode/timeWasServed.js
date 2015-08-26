var net = require('net');
var args = process.argv;
var date = new Date();

var returnDateTime = function () {

	var today = [
		date.getFullYear(),
	    	date.getMonth()+1,
		date.getDate(),
		date.getHours(),
		date.getMinutes()
			];
	for(var i=1; i<today.length; i++) {
		
		today[i] = today[i].toString();

		if( today[i].length < 2){

			today[i] = '0'+today[i];
		}

	}

	return today[0]+"-"+today[1]+"-"+today[2]+" "+today[3]+":"+today[4]

};

var server = net.createServer(function callback (socket) {

	socket.write(returnDateTime());
	socket.end();
});

server.listen(process.argv[2]);

