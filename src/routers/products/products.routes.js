//Requerimos el metodo Router de express
const { Router } = require("express");
//Ejecutamos ese metodo en la variable router
const router = Router();
//Lamamos a file System
const fs = require("fs/promises");
const { existsSync } = require("fs");
const productManager = require('../../Manager/managerProducts')
const Manager = new productManager('src/products.json')

const getProducts = async () => {
  if (existsSync("../products.json")) {
    const products = await Manager.getProducts();
    console.log(products);
    return products;
  } else {
    return [];
  }
};


const escribirArchivo = (url)=>{
  
}




//Routes
router.get("/", async (req, res) => {
  // const products = await getProducts();
  const products = await getProducts()
 
  res.json({
    status: "success",
    data: products,
  });
});

router.get("/:pid", (req, res) => {
  const idFind = req.params.pid;

  if (idFind) {
    const productFind = products.find((product) => product.id === idFind);
    res.send(productFind);
    return;
  }

  res.send("Product not found");
});

router.post("/", async (req, res) => {
   

  // let productAdd = {}


  const newProduct = {
   ...req.body
  }

  const productAdd = await Manager.addProduct(newProduct)
  // if (!products.length) {
  //    productAdd = {
  //     id: 1,
  //     ...newProduct
  //   };
    
  // } else {
  //    productAdd = {
  //     id: products[products.length - 1].id + 1,
  //     ...newProduct
  //   };
    
  // }
  // products.push(productAdd);
  
  // await fs.writeFile("products.json", JSON.stringify(products, null, "\t"));
  res.json({
    success: 'true',
    data: productAdd
  });
});

router.put("/:pid", async (req,res) => {
  const products = await getProducts()
  const idChange = req.params.pid;
  // let productFound = await Manager.getProductById(idChange)
  const newProperties = req.body;

  // const productUpdate = { ...productFound, ...newProperties };

  // productFound = productUpdate;

  const productUpdate = await Manager.upDateProduct( idChange, newProperties)

  console.log(productUpdate);
  // await fs.writeFile('src/products.json', JSON.stringify(products, null, '\t'))

  res.json({
    success: 'true',
    data: productUpdate
  })
});

router.delete("/:pid", () => {
  const idDelete = req.params.pid;
  const productIndex = products.findIndex((product) => product.id === idDelete);

  const productDelete = products.splice(productIndex, 1);
  console.log(productDelete);
});

module.exports = router;
