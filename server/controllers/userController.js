const User = require('../models/userModel');

// get all users
const getAllUsers = (req, res) => {
  User.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

// get single user
const getSingleUser = (req, res) => {
  User.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

// singup user
const signUp = async (req, res) => {
  try { 
    const newUser = await User.signup(req, res);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
};

// login user
const login = async (req, res) => {
  try {
    const user = await User.login(req, res);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
}

// delete user
const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

// update user
const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err.message }));
}

module.exports = {getAllUsers, getSingleUser, signUp, login, deleteUser, updateUser};