const fs=require('fs')
fs.readFile('sample.txt',function(ferr,filedata){
    if(ferr)return console.error(ferr)
    console.log(filedata.toString())
});
console.log('End the Program..')