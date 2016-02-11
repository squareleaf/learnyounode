var fs = require("fs");
function countParagraphs() {
  fs.readFile(process.argv[2], function counting(err, fileContents) {
    paragraphs = fileContents.toString().split("\n");
    console.log(paragraphs.length - 1);
  })
}
countParagraphs();
