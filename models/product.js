

const getDb=require('../utility/database').getdb

module.exports=class Product{
    constructor(pname,price,description,imageUrl){
        this.productName=pname,
        this.price =price,
        this.description=description,
        this.imageUrl=imageUrl
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

    static findById(prodId){
        const db =getDb();

        return db.collection('products')
        .findOne({_id:prodId}.then(product =>{
            console.log(product)
            return product
        }))
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