let router = require("express").Router();
let faker = require("faker");
let Product = require("../models/product");

router.get("/add-product", async (req, res, next) => {
  res.render("main/add-product");
});

router.post("/add-product", async (req, res, next) => {
  try {
    let product = new Product();

    product.category = req.body.category_name;
    product.name = req.body.product_name;
    product.price = req.body.product_price;
    product.cover = faker.image.image();
    await product.save();
    console.log("save");
    res.render("index");
  } catch (error) {
    console.log(err);
    res.redirect("/add-product");
  }
});

router.get("/", async (req, res, next) => {
  res.render("index");
});

router.get("/products/:page", async (req, res, next) => {
  let perPage = 3;
  let page = req.params.page || 1;
  let count = await Product.find({}).countDocuments();

  let displayedProducts = await Product.find({})
    .skip(perPage * page - perPage)
    .limit(perPage);

  res.render("main/products", {
    products: displayedProducts,
    current: page,
    pages: Math.ceil(count / perPage),
  });
});

module.exports = router;
