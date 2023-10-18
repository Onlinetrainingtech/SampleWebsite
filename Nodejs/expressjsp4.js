const express=require('express')
const app=express()
const PORT=3000

app.use(express.raw());

app.post('/',function(req,res){
    const {name}=req.body
    console.log({name})
    res.end();
})
app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server is running on port ${PORT}`)    
        }else{
            console.log("Error occured")
        }            
})