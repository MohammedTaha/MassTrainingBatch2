/// <reference path="./typings/tsd.d.ts" />
var dataModel_1 = require("./dataModel");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
app.set("port", 3000);
var staticFilesPath = path.resolve(__dirname, "static");
app.use(express.static(staticFilesPath));
app.use(bodyParser.urlencoded({ extended: false }));
dataModel_1.initializeModels(app);
app.use("/", function (req, res) {
    var indexFile = path.resolve(__dirname, "./static/app/index.html");
    res.sendfile(indexFile);
});
app.listen(app.get("port"), function () {
    console.log("Express Server, listening on port " + app.get("port"));
});
