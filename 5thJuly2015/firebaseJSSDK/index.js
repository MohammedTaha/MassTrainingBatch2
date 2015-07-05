/**
 * Created by MTA on 7/5/2015.
 */

(function(){

    angular.module("demoApp", [])
        .constant("FirebaseURL", "https://saylanifb.firebaseio.com")
        .controller("ctrl01", function(FirebaseURL, $timeout){
            var vm              = this;
            vm.messagesArray    = [];
            var ref = new Firebase(FirebaseURL);
            vm.saveMessage = function(){
                //ref.set({allMessage : {userName : vm.user.name, message : vm.user.message}});
                ref.push({userName : vm.user.name, message : vm.user.message});
            };

            ref.on("child_added", function(dataSnapshot){
                console.log("Data Updated");
                console.log(dataSnapshot.val());
                $timeout(function(){
                    vm.messagesArray.push(dataSnapshot.val());
                },0);
            });



        });

}());