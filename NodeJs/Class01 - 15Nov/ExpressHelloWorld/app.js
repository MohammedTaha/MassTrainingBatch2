/**
 * Created by MTA on 11/15/2015.
 */

var express = require("express");

var app = express();
app.get("/", function(req, res){
	res.send("<h2>Well, hello from Express.</h2>");
});
app.get("/json", function(req, res){
	res.send({name: "user 01", age: 23, isMale : true});
});
app.listen(9000, function(err){
	if(err){
		console.log("Error in listening on specified Port");
		return;
	}
	console.log("Listening On Specified Port");
});