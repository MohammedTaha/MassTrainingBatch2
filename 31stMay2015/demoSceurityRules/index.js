
angular.module("demoSecurityRules", ["firebase"])
.controller("MainController", function($firebaseArray){
    var ref = new Firebase("https://demosaylani.firebaseio.com/DemoSecurityRules");
    var studentsList    = $firebaseArray(ref);
    var controllerScope = this;

    controllerScope.SaveStudent = function(){
        studentsList.$add(controllerScope.student)
            .then(function(success){
                controllerScope.student = "";
                console.log("Student Added successfully");
            })
            .catch(function(err){
                console.log("Error in saving student in DB");
                alert("Failed to save");
            });
    };


});