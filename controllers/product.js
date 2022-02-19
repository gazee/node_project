const products =[];

exports.getAddProduct=(req,res)=>{
    res.render("add-project",{pageTitile :"add-page",path:'/admin/add-product'})
// res.redirect('/')
}

exports.postAddproduct=(req,res)=>{
    console.log(req.body.productName) 
    // products.push(req.body.productName)
      products.push({productName:req.body.productName})
    res.redirect('/')
}

exports.getPro=(req,res)=>{
    
    //console.log("from shop page",admindata.products)
    // res.sendFile(path.join(__dirname,'..','views','shop.html')); 
    res.render("shope",{pageTitile :"shop page",products:products,path:'/'})
     //path name is joined
}