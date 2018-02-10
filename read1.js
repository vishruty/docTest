	/*var textract=require('textract');

	textract.fromFileWithPath(filePath, function( error, text ) {
		if(error)
		console.log(error);
	else
		console.log(text);
	})*/

	var filePath='one.txt';
	var fs = require('fs');
	var content= fs.readFileSync(filePath,'utf-8');




	var wordCount = content.match(/(\w+)/g).length;
	console.log(wordCount);

	if(wordCount<1000 || wordCount>3000){
		console.log('word limit failed');
	}


	var natural = require('natural');
	var tokenizer = new natural.WordTokenizer();
	content=tokenizer.tokenize(content);






	var temp;
	var WordPOS = require('wordpos'),
	wordpos = new WordPOS();

	wordpos.getAdjectives(content, function(result){
		temp=result;
		console.log('adjective '+result);
	});

	console.log(temp);

	var examples=['eg','example','ex'];
	var count=0,mistakes=0;
		var index=0;

	for(var word of content){


		if(spellcheck.isCorrect(word)===false) mistake++;


		for(var word1 of examples){
			if(word1.toUpperCase() ===word.toUpperCase() ){
				count++;
			}
	             
			}
			 if(word.toUpperCase() == "GIVEN" ){
	                if(content[index+1].toUpperCase()== "BELOW"){
	                	count++;
	                }
			}
			 if(word.toUpperCase() == "SUCH"){
	              if(content[index+1].toUpperCase() == "THAT")
	                count++;    
			}
		index++;


	}
	console.log('count '+count);

	console.log('mistakes ' + mistake);

	//content = content.replace(/\s\s+/g, ' ');
