// buf=new Buffer(256)
// len=buf.write("azar")
// console.log("Length of the String is::"+len)

buf=new Buffer(26)
for(var i=0;i<26;i++)
{
    buf[i]=i+97
}
console.log(buf.toString('ascii'))
console.log(buf.toString('ascii',0,5))
console.log('utf8',0,5)