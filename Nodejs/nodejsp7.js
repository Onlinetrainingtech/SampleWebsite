var http=require('http')
var uc=require('user-case')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(uc.upperCase("welcome"))
    res.end();
}).listen(8080);