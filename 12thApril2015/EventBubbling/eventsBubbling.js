/**
 * Created by MTA on 4/12/2015.
 */


var app = angular.module("eventHandlers", []);

app.controller("ctrl01", function($scope){

    $scope.userName = "";
    $scope.raiseMyEvent = function(){
        $scope.$broadcast("myEve_saveUserName", $scope.userName);
    }

});

app.controller("ctrl02", function($scope){
    $scope.userName = "";
    $scope.$on("myEve_saveUserName", function(e, data){
        //console.log(e);
        //$scope.userName = data;
        alert("Inside crtl 02(1st Child)")
    });

});

app.controller("ctrl03", function($scope){
    $scope.$on("myEve_saveUserName", function(e, data){
        alert("Inside crtl 03(2nd Child)")
    });
});
