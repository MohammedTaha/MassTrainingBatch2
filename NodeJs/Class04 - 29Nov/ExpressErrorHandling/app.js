/// <reference path="typings/tsd.d.ts" />
var express = require("express");
var app = express();
app.use(logger);
app.use(checkUserRights);
app.get("/", function (req, res) {
    res.send("<h2> Hello world </h2>");
});
app.get("/admin", function (req, res) {
    res.send("<h2> Hello Admin </h2>");
});
app.use(errorHandler3);
app.listen(9000);
function logger(req, res, next) {
    console.log("Req Received " + req.url + " at " + new Date());
    next();
}
function checkUserRights(req, res, next) {
    var localMins = new Date().getMinutes();
    var isEven = (localMins % 2) == 0;
    if (isEven) {
        next();
    }
    else {
        next("Acess Denied");
    }
}
function errorHandler3(err, req, res, next) {
    res.send("<h2 style = 'color: red;'>" + err + "</h2>");
}
