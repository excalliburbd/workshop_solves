var http = require('http');
var bl = require('bl');

var store = [];
var count = 0;

var printing = function() {
	
	for(var i=0; i<store.length; i++) {

		console.log(store[i]);
	}
}

var loopQuest = function () {

	for(var i=0; i<3; i++) {

		httpQuest(i);
	}
}

var httpQuest = function (index) {

	http.get( process.argv[2+index], function callback(res) {

		res.pipe(bl(function (err, data) {

			if(err) {

				return console.error(err);
			}

			store[index] = data.toString();
			count++;

			if (count === 3){

				printing();
			}
		}));
	});
}

for(var i=0; i<3; i++) {

	httpQuest(i);
}
