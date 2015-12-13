/// <reference path="./typings/tsd.d.ts" />
var mongoose = require("mongoose");
var connection = mongoose.connect("mongodb://localhost/s101");
var userSchema = new mongoose.Schema({
    UserName: { type: String, required: true },
    Password: { type: String, required: true },
    Age: Number,
    CreatedOn: { type: Date, default: Date.now() }
});
var UserModel = mongoose.model("users", userSchema);
function initializeModels(app) {
    app.post("/insert", function (req, res) {
        var user = new UserModel({ UserName: req.body.user_name, Password: req.body.password, Age: parseInt(req.body.age) });
        user.save(function (err, success) {
            if (err) {
                res.send(err);
            }
            else {
                res.send({ message: "Inserted Successfully", data: success });
            }
        });
    });
    app.get("/get/:maxAge", function (req, res) {
        var maxAge = parseInt(req.params.maxAge);
        if (!maxAge) {
            res.send({ message: "Invalid parameter" });
            return;
        }
        console.log("Max Age ", maxAge);
        UserModel
            .find({ Age: { $lte: maxAge } }, function (err, success) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(success);
            }
        });
    });
}
exports.initializeModels = initializeModels;
