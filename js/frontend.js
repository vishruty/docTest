function getData(){
  var xmlHttp = new XMLHttpRequest();
  var url = "http://localhost:3000/db";
  xmlHttp.open("GET", url, true);
  xmlHttp.send();
  
  xmlHttp.onreadystatechange = function() { 
      if(this.readyState == 4 && this.status == 200){
        var obj = JSON.parse(this.responseText);
        var btn = document.getElementById('button');
        //hiding the button after click
        btn.classList.add("hide-me");
        //getting the variables from json file
        var standardNouns = obj.Standard.nouns;
        var standardAdjectives = obj.Standard.adjectives;
        var standardVerbs = obj.Standard.verbs;
        var standWordCount = obj.Standard.wordCount;


        var evalNouns = obj.Eval.nouns;
        var evalAdjectives = obj.Eval.adjectives;
        var evalVerbs = obj.Eval.verbs;
        var evalWordCount = obj.Eval.wordCount;


        var status = obj.Result.docStatus;
        var points = obj.Result.docPoints;
        var remark = obj.Result.docRemarks;
       
        var html_code = "<p class = \"new_content\">Comparison complete!!<br> <table id = \"table\"><tr><th>Table</th><th>Word Count</th><th>Nouns<th></tr><tr><th>Your Document</th><td>"+evalWordCount+"</td><td>"+evalNouns+"</td></tr><tr><th>Standard Document</th><td>"+standWordCount+"</td><td>"+standardNouns+"</td></tr></table><br></p><p class = \"new-content\">Your document has<b> "+commonNouns+"</b> common nouns with our standard document.<br>Your final score : <b>"+percentage+"%</b></p>";
        //where the content shall be inserted
        document.getElementById('content').insertAdjacentHTML('afterend', html_code);
    }  
  }
}