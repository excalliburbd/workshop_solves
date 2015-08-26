var fs = require('fs');

var filePath = process.argv[2];

var content = fs.readFileSync(filePath);

content = content.toString();

ara = content.split("\n");

console.log(ara.length - 1);
