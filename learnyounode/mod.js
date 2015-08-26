var fs = require('fs');
var path = require('path');

module.exports = function ( dirname, ext, callback) {
	fs.readdir( dirname, function( err, data) {
		if(err) {	
			return callback(err);
		}else {
			var filtered = data.filter( function (each) {
				return "."+ext == path.extname(each)
			});
		}
		callback( null, filtered);
	});	
}
