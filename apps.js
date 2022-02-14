const express=require("express");
const app = express()
const bodyparser = require("body-parser")
const admindata =require('./routes/admin')
const userRoutes =require('./routes/shope')
const path =require('path')

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

app.use('/admin',admindata)  
// admin ennu eyuthathe thanne eni
app.use(admindata)
app.use(userRoutes)
//eroor handiling page 
//its like fanaling

app.use((req,res,next)=>{
    // res.status(404).send("page not found")
    res.status(404).sendFile(path.join(__dirname,'/views/e404page.html'))
})


app.listen(3000,()=>{console.log("server started....")})