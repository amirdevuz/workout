const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

// get all products
const getAllProducts = (req, res) => {
  Product.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
};

// get single product
const getSingleProduct = (req, res) => {
  Product.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
};

// add product
const addProduct = (req, res) => {
  Product.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
};

// delete product
const deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

// update product
const updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

// get all categories
const getAllCategories = (req, res) => {
  Category.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

// get in category
const getInCategory = (req, res) => {
  const { categoryName } = req.params;
  Product.find({ category: categoryName })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

// add category
const addCategory = (req, res) => {
  Category.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

// delete category
const deleteCategory = (req, res) => {
  const { categoryName } = req.params;
  Category.findOneAndDelete({ name: categoryName })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

// update category
const updateCategory = (req, res) => {
  const { categoryName } = req.params;
  Category.findOneAndUpdate({ name: categoryName }, req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  addProduct,
  deleteProduct,
  updateProduct,
  getAllCategories,
  getInCategory,
  addCategory,
  deleteCategory,
  updateCategory,
};