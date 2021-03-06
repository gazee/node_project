
const res = require('express/lib/response');
const Product =require('../models/product');
const mongodb =require('mongodb');
const product = require('../models/product');
const User = require('../models/user');

 ObjectId =mongodb.ObjectId

exports.getAddProduct=(req,res)=>{
    if(!req.isAuthenticated()){
        res.redirect('../user/login')
    }

    res.render("add-product",{pageTitile :"add-page",path:'/admin/add-product'})

}

exports.postAddproduct=(req,res)=>{
    const product =new Product({

        productName:req.body.productName,
        price:req.body.price,
        description:req.body.description,
        imageUrl:req.body.imageUrl 

    })
    product.save()
    .then(res=>{console.log(res,'product added')})
    .catch(err=>{console.log(err)})
   
    res.redirect('/')
}
 
exports.geteditproduct=(req,res)=>{
    const prodId=req.params.id;
    console.log(prodId)
    Product.findById(prodId)
    .then(product =>{
        res.render('edit-product',{
            product:product,
            pageTitile:'edit-product',
            path:"admin/edit-product"

        })
    })
}
exports.posteditproduct=(req,res)=>{
    const prodId=req.body.id;
    const updateproductName =req.body.productName;
    const updateprice =req.body.price;
    const updateimageurl=req.body.imageUrl;
    const updatedescription =req.body.description;
    console.log('from server',prodId);
    
    Product.findByIdAndUpdate(prodId,{
        productName:updateproductName,
        price:updateprice,
        description:updatedescription,
        imageUrl:updateimageurl

    })
    .then( result =>{
        console.log("result updated")
        res.redirect('/')
    }).catch(err=>console.log(err))

}

exports.getPro = (req,res)=>{

    if(!req.isAuthenticated()){
        res.redirect('../user/login')
    }

    product.find()
    .then((products)=>{
        console.log('product list published')
        res.render('shope', {
            pageTitile:"Shop", 
            products:products, 
            path:'/'});
    })
    .catch((err)=>{console.log(err)})
}
    // Product.fetchAll()
    //     .then(products =>{
    //         console.log(products)
    //         res.render('shope', {
    //             pageTitile:"Shop", 
    //             products:products, 
    //             path:'/'
    //         });
    //     })

    // }


// exports.getproduct =(req,res)=>{
//     Product.findById(prodId)
//     .then(product =>{
//         res.render('product-details',{
//             product:product,
//             pageTitile:"product.title",
//             path:"/"
           
//         })
//     })
//     .catch(err=>(console.log(err)))
// }
exports.getProduct = (req,res)=>{
    const prodId = req.params.id
        Product.findById(prodId)
        .then(product =>{
            res.render('product-details', {
                pageTitile:product.title, 
                product:product, 
                path:"/"
        });
    });
}

exports.postDeleteProduct=(req,res)=>{
    const prodId =req.body.id;
    //here we take id from body not from params
    Product.findByIdAndRemove(prodId)
    //in mongoose connection we dont need to change id into object id
    .then(()=>{
        console.log('product destroed')
        res.redirect('/')
    })
    
    .catch((err)=>{console.log(err)})
}

