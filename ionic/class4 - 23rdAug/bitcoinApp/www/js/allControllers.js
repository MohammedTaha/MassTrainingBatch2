/**
 * Created by MTA on 8/23/2015.
 */


angular.module('starter')
  .controller("currenciesController", function($scope, Currencies){
    $scope.allCurrencies = Currencies;
  })
  .controller("ratesCtrl", function($scope, Currencies, $ionicPopover, $http){
    $scope.allCurrencies  = Currencies;
    $scope.ionicPopup     = null;

    $ionicPopover.fromTemplateUrl("/views/popup.html", {scope : $scope})
      .then(function(popupData){
        $scope.ionicPopup = popupData;
      });


    $scope.showPopup = function(event){
      $scope.ionicPopup.show(event);
    };

    $scope.load = function(){
      $http.get('https://api.bitcoinaverage.com/ticker/all').success(function (tickers) {
        angular.forEach($scope.allCurrencies, function (currency) {
          currency.ticker = tickers[currency.code];
          currency.ticker.timestamp = new Date(currency.ticker.timestamp);
        });
      }).finally(function () {
        $scope.$broadcast('scroll.refreshComplete');
      });
    };

    $scope.load();
  });
