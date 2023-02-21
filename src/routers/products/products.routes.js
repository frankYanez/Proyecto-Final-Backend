//Requerimos el metodo Router de express
const { Router } = require("express");
const ProductMongoManager = require("../../dao/mongoManagers/products.manager");
//Ejecutamos ese metodo en la variable router
const router = Router();
const productsModel = new ProductMongoManager
// const productsModel = require("../../models/product.model");



//Routes

//Get all
router.get("/:limit?/:page?/:sort?/:query?", async (req, res) => {7
  const { limit , page , sort , query} = req.query;

  const products = await productsModel.getProducts()

 console.log(req.query);

  const response = await productsModel.paginate({ email: '@'} , {page: page|| 1 , limit: limit || 10, lean: true})
  res.json({
    status: "success",
    payload: products,

  });

  console.log(products);
  // res.render('home', {products})
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
   const data = await Manager.addProduct(
{

  name: "Andres",
  price: 20,
  stock: 12 ,
  category: 'camisas' 
},{

  name: "Mom",
  price: 50,
  stock: 2 ,
  category: 'jeans' 
})
   
  
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
