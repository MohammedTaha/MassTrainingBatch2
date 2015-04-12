/**
 * Created by MTA on 4/12/2015.
 */

var app = angular.module("eventHandlers", []);

app.controller("meEve", function($scope){
    $scope.userName = "";
    $scope.doSomething = function (){
        //alert("I'm ordered to do something");
        //alert($scope.userName);
        $scope.userName = "User 02"
    };

});
