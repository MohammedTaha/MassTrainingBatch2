/**
 * Created by MTA on 11/28/2015.
 */



var q = require("q");

doSomeTask()	
	.then(
		function(){
			console.log("Resolve Called");
		}, 
		function(){
			console.log("Reject Called");
		}
	);
console.log("Hello world 2");
	



function doSomeTask(){
	var deferred = q.defer();
	
	setTimeout(function(){
		deferred.reject();
	}, 5000);
	
	console.log("Inside do some task");
	return deferred.promise;
}

