var f1=require('fs')
f1.rename('mynewfile.txt','sample.txt',function(err){
    if(err)throw err;
    console.log('filerenamed')
})