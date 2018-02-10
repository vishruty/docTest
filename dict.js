var dict = require( 'html-element-dictionary' );
 

/**
* Returns:
*	{
        "a": {
            "desc": "...",
            "url": "...",
            "type": "normal",
            "attributes": [...]
        },
        ...
    }
*/
 
var str = ['a' , 'div' , 'float'];
var arr =[];
for(var i =0 ; i<3 ; i++){
      if(dict[str[i]].type)
          arr.push(str[i]);

}
console.log(arr);
