/**
 * Created by MTA on 4/5/2015.
 */


var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
    $scope.name = "User 01";
    $scope.age = 0;

    $scope.countries = [
        "Pakistan",
        "Afghanistan",
        "India",
        "UK"
    ];
});

app.controller("countriesList", function($scope){
    var population = 124.9;
    $scope.countries = [
        {name: 'France', population: 63.1},
        {name: 'United Kingdom', population: 61.8}
    ];

    $scope.worldsPercentage = function (countryPopulation){
        return ((countryPopulation / population) * 100);
    }
});