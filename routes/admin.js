const express =require('express');
const  router = express.Router()



router.get('/add-product',(req,res)=>{
    res.send('<form action="/add-product" method= "POST" ><input type="text" name="productname" ><button type="submit">Add Product</button></form>')
})

router.post('/add-product',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router