angular.module('starter', ['ionic'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
          .state("landingPage", {
            url : "/",
            templateUrl : "../templates/landingPage.html",
            controller  : "landingPageCtrl as ctrl"
          })
          .state("menu", {
            url : "/menu",
            template : "</br></br> Welcome to menu page"
          });

      $urlRouterProvider.otherwise("/");
    })
    .controller("landingPageCtrl", function(){
      var vm = this;
      vm.showGreetingMessage = function(){
        alert("Hello world");
      }
    });
