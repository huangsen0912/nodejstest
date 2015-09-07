 var http = require('http');


var server=http.createServer(function(req,res){

        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello world\n');


});

server.listen(8080,"localhost");
console.log("server running at http://127.0.0.1:8080/");

