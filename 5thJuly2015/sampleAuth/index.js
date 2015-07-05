/**
 * Created by MTA on 7/5/2015.
 */

(function(){
    angular.module("authSample", ["firebase"])
        .constant("FirebaseURL" , "https://saylanifb.firebaseio.com")
        .controller("authController", function(FirebaseURL, $timeout){
            var vm              = this;
            //vm.loggedInUser     = null;
            //vm.loggedInUserPic  = "https://www.google.com.pk/images/srpr/logo11w.png";
            //vm.abc = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/p100x100/1385593_587808594614521_769924152_n.jpg?oh=e879e741d26a5504b83a1b2a3ded0190&oe=56183F1D&__gda__=1448824156_ae632fb993f9d01c107d34823b57f2d8";
            var ref = new Firebase(FirebaseURL);
            vm.loginWithFB      = function(){
                ref.authWithOAuthPopup("facebook", function(error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        $timeout(function(){
                            vm.loggedInUser = authData;
                            vm.loggedInUserPic = authData.facebook.cachedUserProfile.picture.data.url;
                            //console.log(vm.loggedInUserPic);
                        },0);
                        console.log("Authenticated successfully with payload:", authData);
                    }
                });
            };
            vm.doLogout         = function(){
                if(vm.loggedInUser == null){
                    alert("Please login First");
                    return;
                }
                ref.unauth();
                vm.loggedInUser = null;
            };


        });

}());

