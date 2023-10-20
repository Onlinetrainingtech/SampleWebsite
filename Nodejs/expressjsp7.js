const express=require('express')
const app = express()
const PORT=3000;
app.use(express.text())
app.use(express.json())

app.post('/input',(req,res)=>{
    console.log("received data", req.body)
    res.end();
});
app.get('/view',function(req,res){
    const {name}=req.body;
    res.send(`<h1>Welcome ${name}</h1>`)
}).listen(PORT)
console.log("Server is Running..")