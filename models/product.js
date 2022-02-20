const products =[];

class product {
    constructor(name){
        this.productName =name
    }

    save(){
        products.push(this)
    }

    static fechAll(){
        return products
    }
  
}

module.exports=product