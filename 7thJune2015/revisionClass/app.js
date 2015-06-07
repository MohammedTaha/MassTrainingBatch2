/**
 * Created by MTA on 6/7/2015.
 */


var app = angular.module("revision", ["ngMaterial", "ngNewRouter"]);


app.controller("ctrl1", function($mdToast){

    var vm = this;
    vm.onClickBtn1 = function(){
        $mdToast.show(
            $mdToast.simple()
                .content(vm.textAreaMessage)
                .hideDelay(3000)
        );
    };

});