var fs = require("fs");
var fileName = process.argv[2];
var contents = fs.readFileSync(fileName).toString();
paragraphs = contents.split("\n");
console.log(paragraphs.length - 1);
