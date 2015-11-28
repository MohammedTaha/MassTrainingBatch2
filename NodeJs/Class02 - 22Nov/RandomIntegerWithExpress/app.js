

var express = require("express");

var app = express();

app.get("/", function(req, res){
console.log("HERE");
	var otherModule = require("./myModule");
	
	res.send( "Random Number " + otherModule.RandomNumberFN() );
});


app.listen(9000, function(err){
	if(err){
		console.log("Error in listening on assigned port");
		return;
	}
	console.log("Server in listening mode");
})



