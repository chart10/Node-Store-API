const getAllProductsStatic = async (req, res) => {
  throw new Error('testing async errors');
  res.status(200).json({ msg: 'testing products route' });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'testing  route' });
};

module.exports = { getAllProducts, getAllProductsStatic };
