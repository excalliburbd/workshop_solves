var fs = require('fs');
var path = require('path');

fs.readdir( process.argv[2], function (err, data) {

	var filtered = data.filter( function (each) {

		return "."+process.argv[3] == path.extname(each)
	});

	for(var i = 0; i<filtered.length; i++) {
		
		console.log(filtered[i]);
	}
});	
