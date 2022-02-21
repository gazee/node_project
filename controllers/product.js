
const { fechAll } = require('../models/product');
const product =require('../models/product')

exports.getAddProduct=(req,res)=>{
    res.render("add-project",{pageTitile :"add-page",path:'/admin/add-product'})

}

exports.postAddproduct=(req,res)=>{
   const productz=new product(req.body.productName);
    productz.save()
    // products.push({productName:req.body.productName})
    res.redirect('/')
}

exports.getPro=(req,res)=>{
    
    //console.log("from shop page",admindata.products)
    // res.sendFile(path.join(__dirname,'..','views','shop.html')); 
    product.fechAll(products=>{
        res.render("shope",{
            pageTitile :"shop page",
            products:products,
            path:'/'}) 
    })
    
  
}