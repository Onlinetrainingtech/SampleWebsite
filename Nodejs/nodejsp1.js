var h1=require('http')
h1.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("Welcome to the Application")
}).listen(8080)