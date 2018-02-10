var natural = require('natural');
var corpus = require('dictionary-en-us');
//var spellcheck = new natural.Spellcheck(corpus);
//console.log(corpus);

 console.log("hwlll");
corpus(function (err, result) {
	 console.log("hwlll");
  console.log( result);
});
// enUS(function (err, result) {
//   console.log(err || result);
// });


// var path = require('path');
// var base = require.resolve('dictionary-en-us');
 
// // NEVER USE `readFileSync` IN PRODUCTION. 
// fs.readFileSync(path.join(base, 'index.dic'), 'utf-8');
// fs.readFileSync(path.join(base, 'index.aff'), 'utf-8');