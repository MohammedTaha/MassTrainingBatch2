/**
 * Created by MTA on 5/17/2015.
 */

var app = angular.module("demoNewRouter", ["ngNewRouter"]);

app.controller("landingPageController", function($router){
    $router.config([
        {path : "/", component : "home"},
        {path : "/AboutUs", component : "about_us"}
    ]);
});