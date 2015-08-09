/**
 * Created by MTA on 8/9/2015.
 */


angular.module("starter")
    .controller("c1", function(){
        var vm = this;
        vm.showGreetingMsg = function(){
            alert("Welcome");
        };

    });