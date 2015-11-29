/**
 * Created by MTA on 11/28/2015.
 */

var a = 0;
doSomeTask();
console.log(a);


function doSomeTask(){
    for(var i = 0 ; i < 1000000000; i++){
        a += 2;
    }
}