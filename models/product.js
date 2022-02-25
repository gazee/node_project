

const getDb=require('../utility/database').getdb

module.exports=class Product{
    constructor(pname){
        this.productName=pname;
    }
    save(){
        const Db =getDb();
        Db.collection('products')
        .insertOne(this)
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }

    static fetchAll(){

        const db=getDb();
    
        return db.collection('products').find().toArray()
        .then(products=>{
            console.log(products)
            return products
        })
        .catch(err=>console.log(err))
    }

}




// const fs = require('fs');
// const path =require('path');
// const rootDir=require('../utility/path'  );


// // const products =[];

// class product {
//     constructor(name){
//         this.productName =name
//     }

//     save(){
//         const pat =path.join(rootDir,'data','product.json')
//         fs.readFile(pat, (err,data)=>{
//             let products =[];
//             if(!err){
//                 products=JSON.parse(data)
//             }
//             products.push(this)
//             fs.writeFile(pat,JSON.stringify(products), (err)=>{ console.log(err)});
//         })
        
//     }

//     static fechAll(cb){
//         const pat =path.join(rootDir,'data','product.json')

//         fs.readFile(pat,(err,data)=>{
//             if(err){
//                 cb([])
//             }
//             cb(JSON.parse(data))
//         })
        
//     }
  
// }

// module.exports=product