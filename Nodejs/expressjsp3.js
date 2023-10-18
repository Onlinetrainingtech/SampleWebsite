const express=require('express')
const app=express()
app.use(express.json())
app.post('/',(req,res)=>{
    const {name}=req.body;
    //console.log(`${name} has been added to the list`)
    res.send({message:`${name} has been added to the list`})
}).listen(3000)
console.log("Server is Running..")