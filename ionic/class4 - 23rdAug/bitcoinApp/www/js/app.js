// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){


    $stateProvider
      .state("tabs", {
        url  : "/tabs",
        templateUrl : "/views/tabs.html"
      })
      .state("tabs.rates", {
        url : "/rates",
        views : {
          tab_rates : {
            templateUrl : "/views/rates.html",
            controller : "ratesCtrl"
          }
        }
      })
      .state("tabs.histories", {
        url : "/histories",
        views : {
          tab_history : {
            template : "</br></br></br> histories tab"
          }
        }
      })
      .state("tabs.currencies", {
        url : "/currencies",
        views : {
          tab_currency : {
            templateUrl : "/views/currencies.html",
            controller : "currenciesController"
          }
        }
      });

    $urlRouterProvider.otherwise("/tabs/rates");
})
  .factory("Currencies", function(){
    return [
      { code: 'AUD', text: 'Australian Dollar', selected: true },
      { code: 'BRL', text: 'Brazilian Real', selected: false },
      { code: 'CAD', text: 'Canadian Dollar', selected: true },
      { code: 'CHF', text: 'Swiss Franc', selected: false },
      { code: 'CNY', text: 'Chinese Yuan', selected: true},
      { code: 'EUR', text: 'Euro', selected: true },
      { code: 'GBP', text: 'British Pound Sterling', selected: true },
      { code: 'IDR', text: 'Indonesian Rupiah', selected: false },
      { code: 'ILS', text: 'Israeli New Sheqel', selected: false },
      { code: 'MXN', text: 'Mexican Peso', selected: true },
      { code: 'NOK', text: 'Norwegian Krone', selected: false },
      { code: 'NZD', text: 'New Zealand Dollar', selected: false },
      { code: 'PLN', text: 'Polish Zloty', selected: false },
      { code: 'RON', text: 'Romanian Leu', selected: false },
      { code: 'RUB', text: 'Russian Ruble', selected: true },
      { code: 'SEK', text: 'Swedish Krona', selected: false },
      { code: 'SGD', text: 'Singapore Dollar', selected: false },
      { code: 'USD', text: 'United States Dollar', selected: true },
      { code: 'ZAR', text: 'South African Rand', selected: false }
    ];
  });
