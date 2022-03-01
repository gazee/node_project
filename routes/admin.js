const express =require('express');
const  router = express.Router()
const path =require('path')

const rootDir=require('../utility/path'  )
const productcontrollers =require('../controllers/product')

// const products =[]

router.get('/add-product',productcontrollers.getAddProduct)
//     // res.sendFile(path.join(rootDir,'views','ad-product.html'))
//     res.render("add-project",{pageTitile :"add-page",path:'/admin/add-product'})
//     // res.sendFile(path.join(__dirname,'..','views','ad-product.html')); 
//      //'/views/ad-product.html. enthu kondu engane ayuthunnnu bcoz of os 
// })


router.post('/add-product',productcontrollers.postAddproduct)
// (req,res)=>{
//     console.log(req.body.productName)
//     // products.push(req.body.productName)
//       products.push({productName:req.body.productName})
//     res.redirect('/')
// })


module.exports=router
// exports.routes =router;
// exports.products=products

