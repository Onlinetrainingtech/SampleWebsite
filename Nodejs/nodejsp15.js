function myMethod()
{
    return 123;
}
console.log(myMethod())
function unDefinedValue()
{
    return 321;
}
console.log(unDefinedValue())
setTimeout(function(){
    console.log("Finished")
},20000)
console.log("Waiting..")