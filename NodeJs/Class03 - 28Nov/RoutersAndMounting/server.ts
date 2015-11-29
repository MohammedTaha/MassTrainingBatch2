/// <reference path="./typings/tsd.d.ts" />
import express = require("express");
let app = express();
app.use(function(req ,res, next){
	console.log("1");
	next()
});app.use(function(req ,res ,next){
	console.log("3");
	next()
});

app.get("/" ,function(req, res){
	res.send("hello World");
})
app.use(function(req ,res, next){
	console.log("2");
	next()
});

app.listen(9000)