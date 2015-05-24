/**
 * Created by MTA on 5/24/2015.
 */

angular.module("demoAuth", ["firebase"])
    .controller("loginController", function(userDetails){

        this.tryLogin = function(){
            userDetails.showLoginDialog()
        };

        this.loggedInUser = userDetails.getUser();

        this.saveTask = function(){
            /*var userDetails = userDetails.getUser();
             console.log(userDetails);*/
        };
    });
