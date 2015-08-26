var mod = require('./mod.js');
var args = process.argv;

mod(args[2], args[3], function (err, data) {

	if(err) {
		throw err;
	}else{
		for(var i = 0; i<data.length; i++) {
			console.log(data[i])
		}
	}
});
