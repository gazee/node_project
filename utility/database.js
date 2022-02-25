const mongoClient =require('mongodb').MongoClient
let _db;


mongoConnect =(callbacks)=>{
    mongoClient.connect('mongodb+srv://gazeeb:gazeeb123@cluster0.e2bhf.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client=>{
        console.log("connected")
        _db=client.db()
        callbacks()
    })
    .catch(err=>console.log(err))

}

const getdb=()=>{
    if(_db){
        return _db
    }
}
// module.exports=mongoConnect
exports.mongoConnect=mongoConnect;
exports.getdb=getdb;