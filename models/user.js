// <!--mongoose-->
const mongoose =require('mongoose');
//conection string
// mongoose.connect('mongodb+srv://gazeeb:gazeeb123@cluster0.e2bhf.mongodb.net/shop?retryWrites=true&w=majority')
//create a Schema
const Schema =mongoose.Schema
const userSchema =new Schema({

    username:String,
    password:String

})

//creating model
module.exports = mongoose.model('user',userSchema)