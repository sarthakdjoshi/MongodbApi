const express = require('express');
const router = express.Router();
const auth = require('./auth.js');
const { registerUser, loginUser, getUsers, updateUser, deleteUser } = require('./userController.js');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', registerUser);

// @route   POST api/users/login
// @desc    Login user
// @access  Public
router.post('/login', loginUser);

// @route   GET api/users
// @desc    Get all users
// @access  Private
router.get('/', getUsers);

// @route   PUT api/users
// @desc    Update user
// @access  Private
router.put('/', auth, updateUser);

// @route   DELETE api/users
// @desc    Delete user
// @access  Private
router.delete('/', auth, deleteUser);

module.exports = router;

