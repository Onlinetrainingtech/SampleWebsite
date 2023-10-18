const express=require('express')
const app = express()
const PORT=3000;

//Single routing
const router=express.Router()
router.get('/',(req,res)=>{
    res.send("Hello World")
    })
    app.use(router)
    app.listen(PORT, ()=>{  
        console.log(`Server is running on port ${PORT}`)
        })
