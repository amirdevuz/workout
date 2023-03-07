const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  signUp, 
  login,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

// Get All Users
router.get('/', getAllUsers);

// Get Single User
router.get('/:id', getSingleUser);

// signup user
router.post('/singup', signUp);

// login user
router.post('/login', login);

// Delete User
router.delete('/:id', deleteUser);

// Update User
router.put('/:id', updateUser);

module.exports = router;