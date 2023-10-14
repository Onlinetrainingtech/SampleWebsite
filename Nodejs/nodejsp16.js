try{
    setTimeout(function(){
        console.log("Finished")
        i++
    },1000)
}catch(err)
{
    console.log("An error",err)
}