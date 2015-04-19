/**
 * Created by MTA on 4/19/2015.
 */

var app = angular.module("studentApp", []);

app.service("myCustomService", function(){
    var studentsArray = [];
    this._saveStudentInService = function(studentObj){
        //console.log(studentObj);
        studentsArray.push(studentObj);
        console.log(studentsArray);
    };

    this.getAllStudents = function(){
        return studentsArray;
    }
});

app.controller("ctrl01", function($scope, myCustomService){
    $scope.saveStd = function(){
        var sObj = {
            name : $scope.student_name,
            age : $scope.student_age
        };
        myCustomService._saveStudentInService(sObj);
        $scope.student_name = "";
        $scope.student_age = "";
    };
});
app.controller("ctrl02", function(myCustomService, $scope){

    $scope.allStudents = myCustomService.getAllStudents();
});