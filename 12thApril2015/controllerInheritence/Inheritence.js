/**
 * Created by MTA on 4/12/2015.
 */


var app = angular.module("inheritance", []);


app.controller("ctrl1", function($scope, $rootScope){
    var a =10;
    $rootScope.userName = "User 01";
});

app.controller("ctrl2", function($scope){
    //$scope.userName = "User 02";
    $scope.gender = "Male";
});


