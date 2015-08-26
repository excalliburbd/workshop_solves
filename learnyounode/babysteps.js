	var sum = 0;
	var ara = process.argv;

	for(var i = 2; i<ara.length; i++) {

		sum += +ara[i];
	}

	console.log(sum);


