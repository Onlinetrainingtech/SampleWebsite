var url=require('url')
var addr="https://www.google.com"
var q=url.parse(addr,true)
console.log(q.host)
console.log(q.hostname)
console.log(q.pathname)
console.log(q.protocol)

