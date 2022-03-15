const express =require('express');
const  router = express.Router();
const usercontrollers =require('../controllers/user')



 router.get('/Register',usercontrollers.getregister)
 router.post('/Register',usercontrollers.postregister)
 router.get('/login',usercontrollers.getlogin)
 router.post('/login',usercontrollers.postlogin)


 module.exports=router