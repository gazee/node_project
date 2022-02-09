const express=require("express");
const app =express();
const bodyparser = require("body-parser")


app.use(bodyparser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("product home page")
})

app.get('/add-product',(req,res)=>{
    res.send('<form action="/add-product" method= "POST" ><input type="text" name="productname" ><button type="submit">Add Product</button></form>')
})

app.post('/add-product',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

app.listen(3000,()=>{console.log("server started....")}
)