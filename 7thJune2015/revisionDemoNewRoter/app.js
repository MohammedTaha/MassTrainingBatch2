/**
 * Created by MTA on 6/7/2015.
 */


var app = angular.module("revision", ["ngMaterial", "ngNewRouter"]);


app.controller("ctrl1", function( $router){

    $router.config([
        {path : "/", redirectTo  : "/home"},
        {path : "/home", component : "home"},
        {path : "/profile", component : "profile"}
    ]);



});