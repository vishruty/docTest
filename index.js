//fs node js .. taking up only .txt files and natural
var fs = require('fs');
var natural = require('natural');
var tokenizer = new natural.WordTokenizer();
/*var WordPOS = require('wordpos'),
wordpos = new WordPOS();

//document to be evaluated
var evalDocument = fs.readFileSync('./documents/EvalDocument.txt','utf-8');
//standard document
var standardDocument = fs.readFileSync('./documents/StandardDocument.txt','utf-8');


var standardTokens = tokenizer.tokenize(standardDocument);
var evalTokens = tokenizer.tokenize(evalDocument);

var range = (standardTokens.length*20)/100

var standardLength = standardTokens.length;
var evalLength = evalTokens.length;

if(evalLength <= standardLength-range || evalLength >= standardLength+range){
  console.log("Document size invalid");

}


var evalNouns;
var standardNouns;
var evalAdjectives;
var standardAdjectives;
var evalVerb;
var standardVerb;

var similarNouns = [];

var docBreak = function(file,type){
  return new Promise((resolve,reject)=>{
    wordpos.getNouns(file, function(result){
      if(type=='e')
        evalNouns = result;
      if(type=='s')
        standardNouns=result;
    });

  
    wordpos.getAdjectives(file, function(output){
      if(type=='e')
        evalAdjectives = output;
      if(type=='s')
        standardAdjectives=output;
    });

     wordpos.getVerbs(file, function(output){
      if(type=='e')
        evalVerb = output;
      if(type=='s')
        standardVerb=output;
    });
    
  });
}

let promises=[];
let p1=docBreak(evalDocument,'e');
promises.push(p1);
let p2=docBreak(StandardDocument,'s');
promises.push(p2);

Promise.all(promises).then(function(results){
  var corpus = standardNouns;
  var spellcheck = new natural.Spellcheck(corpus);
  
  for(let i = 0; i < evalNouns.length; i++){
    if(spellcheck.isCorrect(evalNouns[i])){
      similarNouns.push(evalNouns[i]);
    }
  } 
    end();

}).catch((message)=> console.log(message));






 function end(){
    var score = {
      Standard : 
        {
          wordCount : standardLength,
          nouns : standardNouns.length
        }, 

      Eval : 
        {
          wordCount : evalLength,
          nouns : evalNouns.length,
          commonNouns : similarNouns.length
        }
    }
    
  var json = JSON.stringify(score, null, 2);
  //storing it in .json file
  fs.writeFileSync('output.json',json)
 }
*/