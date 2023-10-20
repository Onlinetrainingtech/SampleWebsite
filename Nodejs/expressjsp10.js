const express=require('express')
const app=express();
const PORT=3000;

app.all('/user',function(req,res){
    console.log("Welcome the user request..")
}).listen(PORT)
console.log("Server is running..")