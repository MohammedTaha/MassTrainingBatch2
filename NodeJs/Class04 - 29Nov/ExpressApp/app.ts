/// <reference path="./typings/tsd.d.ts" />
import express 	= require("express");
import ejs		= require("ejs");
import path		= require("path");
import bodyParser 	= require("body-parser");
let studentStore 	= [];
let app = express();
let userNumber = 0;
app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res)=>{
	res.render("index", {name : "User " + userNumber, age : 23, rollNumber : 25});
	userNumber++;
});
app.get("/admin", (req, res)=>{
	res.render("adminTemps/admin", {});
});
app.get("/students", (req, res)=>{	
	res.render("students/add", {data : studentStore});
});
app.post("/students", (req, res)=>{
	studentStore.push(req.body);
	res.redirect("/students");	
});
app.listen(9000);


