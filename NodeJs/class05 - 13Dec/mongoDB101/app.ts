/// <reference path="./typings/tsd.d.ts" />
import {initializeModels} from "./dataModel";

import express 	= require("express");
import path		= require("path");
import bodyParser = require("body-parser");
let app = express();
app.set("port", 3000);

let staticFilesPath = path.resolve( __dirname, "static" );
app.use(express.static(staticFilesPath));
app.use( bodyParser.urlencoded({ extended: false }) );


initializeModels(app);


app.use("/", (req, res)=>{
	let indexFile = path.resolve( __dirname, "./static/app/index.html");
	res.sendfile(indexFile);
});

app.listen(app.get("port"), ()=>{
	console.log("Express Server, listening on port " + app.get("port"));
});

