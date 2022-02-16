const express =require('express');
const  router = express.Router()
const path =require('path')
const admindata=require('./admin')

router.get('/',(req,res)=>{
    console.log('shope',admindata.products)
    res.sendFile(path.join(__dirname,'..','views','shop.html')); 
     //path name is joined
})



module.exports =router