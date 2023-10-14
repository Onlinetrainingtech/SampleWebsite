var fs=require('fs')
var readerstream=fs.createReadStream('sample.txt')

var writerstream=fs.createWriteStream('output.txt')

readerstream.pipe(writerstream)

console.log("Programmm end...")