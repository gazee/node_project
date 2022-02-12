const express=require("express");
const app = express()
const bodyparser = require("body-parser")
const adminroutes =require('./routes/admin')
const userRoutes =require('./routes/shope')
const path =require('path')

app.use(bodyparser.urlencoded({extended:true}))

app.use('/admin',adminroutes)  
// admin ennu eyuthathe thanne eni
app.use(adminroutes)
app.use(userRoutes)
//eroor handiling page 
//its like fanaling

app.use((req,res,next)=>{
    // res.status(404).send("page not found")
    res.status(404).sendFile(path.join(__dirname,'/views/e404page.html'))
})


app.listen(3000,()=>{console.log("server started....")})