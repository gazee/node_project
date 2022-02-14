const express =require('express');
const  router = express.Router()
const path =require('path')

const rootDir=require('../utility/path'  )

const products =[]

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','ad-product.html'))
    // res.sendFile(path.join(__dirname,'..','views','ad-product.html')); 
     //'/views/ad-product.html. enthu kondu engane ayuthunnnu bcoz of os 
})
// router.get('/shop',(req,res)=>{
//     res.sendFile(path.join(__dirname,'.  .','/views/shop.html')); 
     
// })

router.post('/add-product',(req,res)=>{
    console.log(req.body.productName)
    products.push(req.body.productName)
    res.redirect('/')
})


module.exports=router
// exports.routes =router;
// exports.products=products

