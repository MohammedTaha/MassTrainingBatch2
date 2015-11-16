/// <reference path = "./typings/tsd.d.ts"/>

import express = require("express");

var app = express();

app.get("/", (req : express.Request, res : express.Response)=>{
	res.send("Hello Taha");
});

app.listen(3000, ()=>{
	console.log("Server Started at 3000");
});