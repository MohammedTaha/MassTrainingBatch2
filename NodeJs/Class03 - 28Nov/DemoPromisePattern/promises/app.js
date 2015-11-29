/**
 * Created by MTA on 11/28/2015.
 */

var express = require("express");
var myModule = require("./myModule");
var app = express();

app.get("/" , function(req, res){

	myModule.getRandomNumber()
		.then(function(generatedRandomNum){
			res.send("The random number is " + generatedRandomNum);
		});
	//res.send("Hello world 2");
}); 

 
app.listen(3000); 





 