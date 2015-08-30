/**
 * Created by MTA on 8/30/2015.
 */

angular.module('starter')
.controller("c1", function($scope, $ionicModal, $ionicPopup){

    $ionicModal
      .fromTemplateUrl("../views/MainModal.html", {scope : $scope, animation: 'slide-in-up'})
      .then(function(abc){
        $scope.modalWindow = abc;
      });

    $scope.greet = function(){
      //$scope.message = "Hello From Button 01 Ctrl 01";
      //$scope.modalWindow.show();
      var message = $ionicPopup.alert({
        template : "Hello From Button 01 Ctrl 01",
        title : "Alert Window"
      });

      message.then(function(){
        //alert("Clicked ok");
      });
    };

    $scope.warnUser = function(){
      //$scope.message = "Action Denied, You are not allowed to access this functionality";
      //$scope.modalWindow.show();

      var message = $ionicPopup.confirm({
        template : "Hello From Button 01 Ctrl 01",
        title : "Alert Window"
      });

      message.then(function(opt){
        alert(opt)
      });

    };
});
