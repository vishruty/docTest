
var natural = require('natural');
var TfIdf = natural.TfIdf;
var tfidf = new TfIdf();


tfidf.addFileSync('one.txt');

console.log(tfidf.tfidf('node', 0));
