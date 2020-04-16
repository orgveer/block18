var express = require('express');

var app = express();

app.use(express.static(__dirname + '/'));


app.get( '/', function(req,res){
	console.log( 'In root');
	res.write( 'Welcome to Redhat OpenShift on IBM Cloud!!!');
	res.end();
});


app.listen( 8080, function(){
	console.log( 'Server started...');
});
