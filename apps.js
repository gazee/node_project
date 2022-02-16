const express=require("express");
const app = express()
const bodyparser = require("body-parser")
const admindata =require('./routes/admin')
const userRoutes =require('./routes/shope')
const path =require('path')

app.set('view engine','ejs');
app.set('views','views')

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

app.use('/admin',admindata.routes)  
// admin ennu eyuthathe thanne eni
// app.use(admindata)
app.use(userRoutes)
//eroor handiling page 


app.use((req,res,next)=>{
    // res.status(404).send("page not found")
    //res.status(404).sendFile(path.join(__dirname,'views','e404page.html'))
    res.status(404).render("404",{pageTitile:"page Not found"})
})


app.listen(3000,()=>{console.log("server started....")})