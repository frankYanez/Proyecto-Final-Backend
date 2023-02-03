//Requerimos el metodo Router de express
const { Router } = require("express");
//Ejecutamos ese metodo en la variable router
const router = Router();
//Lamamos a file System
const fs = require("fs/promises");
const { existsSync } = require("fs");
const UserMongoManager = require("../../dao/mongoManagers/user.manager");
// const productManager = require('../../Manager/managerProducts')
// const Manager = new productManager('src/products.json')
const Manager = new UserMongoManager()
const UserSchema = require('../../models/user.model');




//Routes

//Get all
router.get("/", async (req, res) => {

  const products = await Manager.getProducts()
 
  res.json({
    status: "success",
    data: products,
  });
});



//Get by ID
router.get("/:pid", async (req, res) => {
  const idFind = req.params.pid;


  if (idFind) {

    const productFound = await Manager.getById(idFind);
    res.json({status: "success",
    data: productFound});
    return;
  }

  res.send("Product not found");
});


//Create One
router.post("/", async (req, res) => {
   const data = await Manager.addProduct(req.body)
   data.save()
   console.log(data);
  // let productAdd = {}


  // const newProduct = {
  //  ...req.body
  // }

  // const productAdd = await Manager.addProduct(newProduct)
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
    data: data
  });
});

router.put("/:pid", async (req,res) => {
  const products = await Manager
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
