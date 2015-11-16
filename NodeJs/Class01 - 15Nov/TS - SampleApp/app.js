/// <reference path = "./typings/tsd.d.ts"/>
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("Hello Taha");
});
app.listen(3000, function () {
    console.log("Server Started at 3000");
});
