/**
 * Created by MTA on 5/3/2015.
 */

var app = angular.module("todo", ["ngMaterial", "firebase"]);

app.constant("MY_FIREBASE_URL", "https://demosaylani.firebaseio.com/messages");

app.controller("getUserDetails", function($scope, $firebaseArray, MY_FIREBASE_URL){

    var ref = new Firebase(MY_FIREBASE_URL);
    var messages = $firebaseArray(ref);
    $scope.saveTask = function(){
        messages.$add($scope.task);
    };

});

app.controller("showTodos", function($scope, $firebaseArray, MY_FIREBASE_URL){
    var ref = new Firebase(MY_FIREBASE_URL);
    $scope.messages = $firebaseArray(ref);

    $scope.removeTask = function(taskDetails){
        $scope.messages.$remove(taskDetails);
    };

});

