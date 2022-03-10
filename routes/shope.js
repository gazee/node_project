const express =require('express');
const  router = express.Router()
const path =require('path')
const admindata=require('./admin')
const productcontrollers =require('../controllers/product')

 router.get('/',productcontrollers.getPro);
 router.get('/product/:id',productcontrollers.getProduct);
//  router.get('/products/:id',productControllers.getProduct);

// (req,res)=>{
//     const product =admindata.products
//     //console.log("from shop page",admindata.products)
//     // res.sendFile(path.join(__dirname,'..','views','shop.html')); 
//     res.render("shope",{pageTitile :"shop page",product:product,path:'/'})
//      //path name is joined
// })

 

module.exports =router