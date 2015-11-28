
var http = require("http");
var users = {
	male : 0,
	female : 0
};

http.createServer(function(req, res){

	if(req.url == "/m"){
		users.male++;
	} 
	else if (req.url == "/f"){
		users.female++;
	} 
	else if (req.url == "/reset"){
		users = {
			male : 0,
			female : 0
		};
	}
	res.write("Total Users " + JSON.stringify(users) );

	res.end();
})
.listen(9000, function(err){
	if(err){
		console.log("Error in listening");
		return;
	}
	console.log("Server in listening state");
});




