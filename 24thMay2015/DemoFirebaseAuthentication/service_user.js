/**
 * Created by MTA on 5/24/2015.
 */


angular.module("demoAuth")
.service("userDetails", function(){
        var ref = new Firebase("https://demosaylani.firebaseio.com/auth");
        var user = null;

        this.showLoginDialog  = function(){
            ref.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    user = authData;
                }
            });
        };


        this.getUser = function(){
            return user;
        }
    });