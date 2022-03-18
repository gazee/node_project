const Localstrategy=require('passport-local').Strategy
const User =require('../models/user')
const bcrypt =require('bcrypt')

exports.initializePassport=(passport)=>{
   const authenticateUser=async(username,password,done)=>{
       const user =await User.findOne({username:username})

       if(!user){
           console.log("User is not found")
           return done(null,false,{message:"User is not found"})
       }
       try {
           if (await bcrypt.compare(password,user.password)){
            return done (null,user)
           }else{
               console.log("passport missmatch")
               return done(null,false,{message:'passport missmatch'})
           }
       } catch (error) {
           return done(error)
       }
   }

    passport.use(new Localstrategy({usernameField:'username',passwordField:'password'},authenticateUser))

    passport.serializeUser((user,done)=>{done(null,user.id )})
    passport.deserializeUser(async (_id,done)=>{
        try {
            const user=await User.findById({_id})
            done(null,user)
        } catch (error) {
            done (error,false)
            
        }
    })
}

// exports.isAuthenticated=(req,res,next)={
//     if(req.user){

//     }
// }
