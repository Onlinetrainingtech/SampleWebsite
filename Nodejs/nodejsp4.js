var f1=require('fs')
f1.unlink('mynewfile.txt',function(err){
    if(err)throw err;
    console.log('FileDeleted..')
})