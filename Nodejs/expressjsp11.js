const express=require('express')
const app=express()
const PORT=3000

const student=express.Router()
app.use('/student',student)

student.get('/signup',function(req,res){
    if(req.baseUrl=='/student')
    {
        console.log('Show signup form')
        res.end()
    }
    else
    {
        console.log("Invalid request")
    }
})
app.listen(PORT,function(err){
    if(err)console.log(err)
    console.log("Server is Running..")
})