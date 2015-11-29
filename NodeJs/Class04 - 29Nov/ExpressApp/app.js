/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var studentStore = [];
var app = express();
var userNumber = 0;
app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (req, res) {
    res.render("index", { name: "User " + userNumber, age: 23, rollNumber: 25 });
    userNumber++;
});
app.get("/admin", function (req, res) {
    res.render("adminTemps/admin", {});
});
app.get("/students", function (req, res) {
    res.render("students/add", { data: studentStore });
});
app.post("/students", function (req, res) {
    studentStore.push(req.body);
    res.redirect("/students");
});
app.listen(9000);
