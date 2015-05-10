/**
 * Created by MTA on 5/10/2015.
 */

var app = angular.module("myFactoryDemo", []);

/*
app.service("myTODOStore", function(){
    var taskList = [];
    this.addTask = function(task){
        taskList.push(task);
    };
    this.getTask = function(){
        return taskList;
    }
});*/

app.factory("myTODOStore", function(){
    var taskList = [];
    /*function __addTask(task){
        taskList.push(task);
    }
    function __getTask(){
        return taskList;
    }*/

    return {
        addTask  : function (task){
            taskList.push(task);
        },
        getTask  : function(){
            return taskList;
        }
    };
});



app.controller("addTODO", function($scope, myTODOStore){
    $scope.TODO     = "";
    $scope.addTODO  = function(){
        myTODOStore.addTask($scope.TODO);
        $scope.TODO = "";
    };
});

app.controller("viewTODO", function(myTODOStore, $scope){
    $scope.allTODO = myTODOStore.getTask();
});