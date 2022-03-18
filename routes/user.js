const express =require('express');
const Passport = require('passport');
const  router = express.Router();
const usercontrollers =require('../controllers/user')



 router.get('/Register',usercontrollers.getregister)
 router.post('/Register',usercontrollers.postregister)
 router.get('/login',usercontrollers.getlogin)
 router.post('/login',Passport.authenticate('local',{
     successRedirect:'/',
     failureRedirect:'/user/login'
 
 }))
 router.get('/logout',usercontrollers.userLogout)
//  usercontrollers.postlogin

 module.exports=router