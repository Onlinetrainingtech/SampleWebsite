const express=require('express')
const app = express()
const PORT=3000;

app.use(express.urlencoded({extended:false}))

app.post("/",function(req,res){
    console.log("received data");
    console.log(req.body)
    res.end();
}).listen(PORT)
console.log("Server Running...")