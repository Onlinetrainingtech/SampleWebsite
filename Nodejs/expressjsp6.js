const express=require('express')
const app=express()
const PORT=3000

const r1=express.Router();
const r2=express.Router();
const r3=express.Router();

r1.get("/user",function(req,res){
    console.log("User Routing")
    res.send("<h1>UserRouting</h1>")
    res.end();
})

r1.get("/admin",function(req,res){
    console.log("Admin Routing")
    res.send("<h1>AdminRouting</h1>")
    res.end();
})

r1.get("/student",function(req,res){
    console.log("Student Routing")
    res.send("<h1>StudentRouting</h1>")
    res.end();
})

app.use(r1)
app.use(r2)
app.use(r3)
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    });