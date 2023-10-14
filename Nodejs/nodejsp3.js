var fs=require('fs')
//var file="welcome"
    fs.writeFile('mynewfile.txt','welcome',function(err){
    //fs.open('mynewfile.txt','w',function(err,file){
    if(err)throw err;
    console.log('Display!!')
})