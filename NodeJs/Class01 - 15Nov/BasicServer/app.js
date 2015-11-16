var http = require("http");

http.createServer(function(req, res){
	
	var message;
	if(req.url == "/home"){
		message = "<h2>Dear user, welcome to home</h2>";
	} else {
		message = "Hello world";
	}
	
	res.write(message);
	res.end();
}).listen("9000");
