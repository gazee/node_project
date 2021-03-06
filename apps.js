const express=require("express");
const app = express()
const passport=require('passport');
const session=require('express-session');
const bodyparser = require("body-parser")
const admindata =require('./routes/admin')
const userRoutes =require('./routes/shope')
const path =require('path')
const eroorcontroler =require('./controllers/error')
const userdata =require('./routes/user');
const mongoConnect =require('./utility/database').mongoConnect
const mongoose =require('mongoose');
const {initializePassport}=require('./controllers/passport')


initializePassport(passport)
app.set('view engine','ejs');
app.set('views','views')
//first view used to refer this

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(session({
   secret:'secret',
   resave:false,
   saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/user',userdata)
app.use('/admin',admindata)  
app.use(userRoutes)
//last one mathme engane root kodukathe eyuthan paadu


/*eroor handiling page */ 
app.use(eroorcontroler.errorfun)
//     (req,res,next)=>{
//     // res.status(404).send("page not found")
//     //res.status(404).sendFile(path.join(__dirname,'views','e404page.html'))
//     res.status(404).render("404",{pageTitile:"page Not found",path:""})
// })


mongoose.connect('mongodb+srv://gazeeb:gazeeb123@cluster0.e2bhf.mongodb.net/shop?retryWrites=true&w=majority')

// mongoConnect(client =>{
   
   .then(result=>{
   app.listen(3000,()=>{console.log("server started....")})
})

 