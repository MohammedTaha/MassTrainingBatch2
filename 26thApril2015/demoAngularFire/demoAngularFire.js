/**
 * Created by MTA on 4/26/2015.
 */


var app = angular.module("myFirebaseApp", ["ngMaterial", "firebase"]);

app.controller("myForm", function($scope, $firebaseObject){
    var ref = new Firebase("https://demosaylani.firebaseio.com/hello");

    var syncObject  = $firebaseObject(ref);
    syncObject.$bindTo($scope, "user");

});
