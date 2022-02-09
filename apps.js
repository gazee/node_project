const express=require("express");
const app = express()
const bodyparser = require("body-parser")
const adminroutes =require('./routes/admin')
const userRoutes =require('./routes/shope')

app.use(bodyparser.urlencoded({extended:true}))

app.use(adminroutes)
app.use(userRoutes)



app.listen(3000,()=>{console.log("server started....")})