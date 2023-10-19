const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    name: 'utopia sofa',
  });
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  console.log('featured products sent');
  res.status(200).json({ products });
};

module.exports = { getAllProducts, getAllProductsStatic };
