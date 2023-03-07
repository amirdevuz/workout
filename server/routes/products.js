const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/productController");

// Get All Categories
router.get("/categories", getAllCategories);

// Get Single Product
router.get("/:id", getSingleProduct);

// Add Category
router.post("/categories", addCategory);

// Delete Category
router.delete("/categories/:categoryName", deleteCategory);

// Update Category
router.put("/categories/:categoryName", updateCategory);

// Get All Products
router.get("/", getAllProducts);

// Get In Category
router.get("/categories/:categoryName", getInCategory);

// Add New Product
router.post("/", addProduct);

// Delete a Product
router.delete("/:id", deleteProduct);

// Update a Product
router.put("/:id", updateProduct);

module.exports = router;
