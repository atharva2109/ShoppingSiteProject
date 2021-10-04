const Product = require("../models/Product");

// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
      products = await Product.find({category:req.params.category});
      res.json(products);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
  }
};

const getProducts = async (req, res) => {

  try {

    const products = await Product.find({});

    res.json(products);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: "Server Error" });

  }

};

module.exports = {
  getProducts,
  getProductById,
  getProductsByCategory,
};
