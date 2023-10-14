var fs=require('fs')
console.log('get the file info')
fs.stat('sample.txt',function(err,stat){
    if(err)
    {
        return console.error(err)
    }
    console.log(stat)
    console.log('fileinformation sucess..')
    //check the file type
    console.log('IsFile::\n'+stat.isFile())
    console.log("IsDirectory::\n"+stat.isDirectory())
})