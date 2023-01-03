//Requerimos el metodo Router de express
const { Router } = require("express");
//Ejecutamos ese metodo en la variable router
const router = Router();

const products = [];

//Routes
router.get("/", (req, res) => {
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

router.post("/", (req, res) => {
  const id = 0;

  if (!products.length) {
    const productAdd = res.json({
      id: 1,
      title: req.body.title,
      description: req.body.description,
      code: req.body.code,
      price: req.body.price,
      status: req.body.status,
      stock: req.body.stock,
      category: req.body.category,
    }) ;
    products.push(productAdd);
  } else {
    const productAdd = res.json({
      id: products[products.length - 1].id + 1,
      title: req.body.title,
      description: req.body.description,
      code: req.body.code,
      price: req.body.price,
      status: req.body.status,
      stock: req.body.stock,
      category: req.body.category,
    });
    products.push(productAdd);
  }

  res.send("Added product");
});

router.put("/:pid", () => {
  const idChange = req.params.pid;
  const newProperties = req.body
  const productChange = products.find((product) => product.id === idChange);

  const index = products.findIndex(product => product.id === idChange)
  productUpdate = {idChange, ...newProperties,...productChange}

  products[index] = productUpdate
});

router.delete("/:pid", () => {
  const idDelete = req.params.pid;
  const productIndex = products.findIndex((product) => product.id === idDelete);

  const productDelete = products.splice(productIndex, 1);
  console.log(productDelete);
});

module.exports = router;
