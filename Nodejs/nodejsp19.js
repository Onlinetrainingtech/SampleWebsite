var fs=require('fs')
var data=''
//create a readable stream
var readerStream=fs.createReadStream('sample.txt')
readerStream.setEncoding('utf-8')
readerStream.on('data',function(chunk){
    data+=chunk;
});
readerStream.on('end',function(){
    console.log(data)
});
readerStream.on('error',function(){
    console.log(err.stack)
});
console.log('End Program')
