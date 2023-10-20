const express=require('express');
const app=express()
app.locals.email='azartechnet@gmail.com'
app.locals.company='livewire'
console.log(app.locals.email)
console.log(app.locals.company)