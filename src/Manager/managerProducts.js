const fs = require('fs/promises');
const { existsSync } = require('fs')


class ProductManager {
    static id = 0;
    
    constructor(path){
        this.path = path;
    }

    

    async addProduct(product){
        const products = await this.getProducts();
        if(!products.length){
            ProductManager.id = 1
        }else{
            ProductManager.id = products[products.length - 1].id +1;
        }
        
            const newProduct = {
                id: ProductManager.id,
                ...product
            }
       
           
        
        products.push(newProduct)
        await fs.writeFile(this.path, JSON.stringify(products,null, '\t'))
        return newProduct
    }

    async getProducts(){
        if(existsSync(this.path)){
            const data = await fs.readFile(this.path, 'utf-8')
            
            const products = JSON.parse(data);
            return products;
        } else {
            
            return []
        }
    }

    async getProductById(id){
        const products = await this.getProducts()

        const productFound = products.find( product => product.id === id)

        if (!productFound) {
            console.error('Product not Found');
        } else {
            return productFound
        }
    }

    async upDateProduct(id, newProperties){
        const products = await this.getProducts()
        const productFound = await this.getProductById(id);

        const productUpdate = {...productFound,...newProperties}

        const index = products.indexOf(productFound)

        products[index] = productUpdate

        await fs.writeFile(this.path, JSON.stringify(products, null, '\t'))
        
        return productUpdate

    }

    async deleteProduct(id){
        let products = await this.getProducts()
        const foundProduct = await this.getProductById(id)

        if (foundProduct) {
            let newArray = products.filter( product => product.id !== id)
            products = newArray
            await fs.writeFile(this.path, JSON.stringify(products,null, '\t'))
            return products
        } else {
            console.log('Not Found');
        }

    
        
    }
}

module.exports = ProductManager;













