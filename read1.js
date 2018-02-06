var textract = require('textract');
var fileToCheck= 'one.txt'
/*var filePath='one.txt';
textract.fromFileWithPath(filePath, function( error, text ) {
	if(error)
	console.log(error);
else
	console.log(text);
})
*/

var fs = require('fs');
var content= fs.readFileSync(fileToCheck,'utf-8');




var wordCount = content.match(/(\w+)/g).length;
console.log(wordCount);

	if(wordCount<1000 || wordCount>3000){
		console.log('word limit failed');
	}


var natural = require('natural');
var tokenizer = new natural.WordTokenizer();
content=tokenizer.tokenize(content);


console.log(content);






//content = content.replace(/\s\s+/g, ' ');