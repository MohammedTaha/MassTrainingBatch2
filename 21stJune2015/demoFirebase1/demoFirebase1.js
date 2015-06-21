/**
 * Created by MTA on 6/21/2015.
 */

angular.module("fbase", ["firebase"])
    .constant("FirebaseURL", "https://saylani101.firebaseio.com")
    .controller("controller01", function($firebaseObject, FirebaseURL){
        var ref = new Firebase(FirebaseURL);
        var syncedObj = $firebaseObject(ref);
        this.savedUser = syncedObj.myUser;
        this.saveData = function(){
            syncedObj.myUser = this.user;
            syncedObj.$save();
        };
        /*this.counter = syncedObj.counter || 0;
        this.saveData = function(){
            syncedObj.counter = (++this.counter);
            syncedObj.$save();
        };*/

    })
    .controller("controller02", function(FirebaseURL, $firebaseArray){

        var ref = new Firebase(FirebaseURL).child("/tasks");
        var syncedArr = $firebaseArray(ref);
        this.allTasks = syncedArr;
        this.saveTask = function(){
            //console.log(this.task);
            syncedArr.$add(this.task);
        };

    });

