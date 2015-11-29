/// <reference path="typings/tsd.d.ts" />
import express = require("express");
let app = express();
app.use(logger);
app.use(checkUserRights);
app.get("/", (req : express.Request, res : express.Response)=>{	
	res.send("<h2> Hello world </h2>");
});
app.get("/admin", (req : express.Request, res : express.Response)=>{	
	res.send("<h2> Hello Admin </h2>");
});
app.use(errorHandler3);
app.listen(9000);






function logger(req, res, next){
	console.log("Req Received " + req.url + " at " + new Date());
	next();	
}
function checkUserRights(req, res, next){
	let localMins  	= new Date().getMinutes();
	let isEven		= (localMins % 2) == 0;
	if(isEven){
		next();	
	} else {
		next("Acess Denied");	
	}	
}

function errorHandler3(err, req, res, next){
	res.send("<h2 style = 'color: red;'>"+ err +"</h2>");
}