
const res = require('express/lib/response');
const Product =require('../models/product');
const mongodb =require('mongodb')

 ObjectId =mongodb.ObjectId

exports.getAddProduct=(req,res)=>{
    res.render("add-project",{pageTitile :"add-page",path:'/admin/add-product'})

}

exports.postAddproduct=(req,res)=>{
   const productz=new Product(req.body.productName,req.body.price,req.body.description,req.body.imageUrl);
    productz.save()
    // products.push({productName:req.body.productName})
    res.redirect('/')
}

// exports.getPro=(req,res)=>{
    
//     //console.log("from shop page",admindata.products)
//     // res.sendFile(path.join(__dirname,'..','views','shop.html')); 
//     Product.fechAll()
//         .then(products=>{
//             res.render("shope",{
//                 pageTitile :"shop page",
//                 products:products,
//                 path:'/'
//             }) 
//          })
    
  
// } 
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
    console.log('from server',prodId)
    const product=new Product(updateproductName,updateprice,updatedescription,updateimageurl,new ObjectId(prodId) );
    
    product.save().then( result =>{
        console.log("result updated")
        res.redirect('/')
    }).catch(err=>console.log(err))

}

exports.getPro = (req,res)=>{
    //const products = adminData.products
   //console.log('shopjs',adminData.products)
    //res.sendFile(path.join(rootDir,'views','shop.html'));
            Product.fetchAll()
                .then(products =>{
                  console.log(products)
                    res.render('shope', {
                        pageTitile:"Shop", 
                        products:products, 
                        path:'/'
                    });
                })

            }


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
                        path:'/'
                });
            });
}
