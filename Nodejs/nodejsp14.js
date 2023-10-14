var rec=function(){
    console.log('hey 1000 milliseconds')
    setTimeout(rec,1000)
}
rec();