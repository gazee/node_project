
const Product =require('../models/product')

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


exports.getproduct =(req,res)=>{
    Product.findById(prodId)
    .then(product =>{
        res.render('product-details',{
            product:product,
            pageTitile:"product.title",
            path:"Error"
        })
    })
    .catch(err=>(console.log(err)))
}