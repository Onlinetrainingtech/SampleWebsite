var e1=require('express')
var app=e1()
app.get('/',(req,res)=>{
    res.send("hello world");
});
app.listen(3000);