var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (res) {

	maw = bl( function (err, data) {
		
		if(err) {

			throw err;
		}else{
			console.log(data.length);
			console.log(data.toString());

		}
	});

	res.pipe(maw);
});
