/**
 * Created by MTA on 11/28/2015.
 */

var q = require("q");

exports.getRandomNumber = function (){
	
	var rNum = Math.random();
	var deferred = q.defer();
	setTimeout(function(){
	
		deferred.resolve(rNum);	

	}, 5000);
	
	return deferred.promise;
	
}


