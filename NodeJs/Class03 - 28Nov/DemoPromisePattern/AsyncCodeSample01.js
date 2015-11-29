/**
 * Created by MTA on 11/28/2015.
 */
/*
var a = 0;
doSomeTask();
console.log(a);

function doSomeTask(){
    setTimeout(function(){
        console.log("TIME OUT COMPLETED");
    }, 5000);
    console.log("Inside Do Some task");
}
*/

var marks = [56, 60, 90];
announceResultOnResultDate(getTotalsMarks);
//getTotalsMarks();


function announceResultOnResultDate(fn){
	setTimeout(function(){
		fn();
	}, 5000);
}

function getTotalsMarks(){
    var totalMarks = 0;
    marks.forEach(function(m){
        totalMarks += m;
    });
    console.log("Total Marks are : " + totalMarks);
}








