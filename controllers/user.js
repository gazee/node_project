
const res = require('express/lib/response');
const Product =require('../models/product');
const mongodb =require('mongodb');
const product = require('../models/product');
const User = require('../models/user');
const bcrypt =require('bcrypt')


exports.getregister = (req,res)=>{
    res.render('register', {
        pageTitile:product.title, 
        path:'/user/Register'
    });
}

exports.postregister =async (req,res)=>{

    const user =new User({
        username:req.body.username,
        password: await bcrypt.hash(req.body.password,10) 
    })
    console.log(user);
    user.save()
    .then(result=>{
        console.log(result,'user added')
        // res.render('register')
        res.render('register', {
            pageTitile:product.title, 
            path:'/user/Register'
        });
    })
    .catch(err=>{console.log(err)})

}
exports.postlogin=(req,res)=>{
    const userData =req.body
    User.findOne({username:userData.username,password:userData.password},(err,user)=>{
        if(err) throw err;
        if(!user){
            console.log("invalid user")
            res.render('login',{
                pageTitile:product.title,          
                path:"/user/login"
            }); 
        }else{
            console.log(user);
            Product.find()
            .then(products=>{
                res.render('shope', {
                    pageTitile:"Shop", 
                    products:products, 
                    path:'/'
                });
            })
        }   
    })
    
    
}

exports.getlogin=(req,res)=>{
    res.render('login',{
        pageTitile:product.title,          
        path:"/admin/login"
    }); 
}

exports.userLogout=(req,res)=>{
    req.logout();
    res.redirect('/user/login');
}