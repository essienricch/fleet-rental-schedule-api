const express = require('express');
const UserService = require('../services/userService');
const bcrypt = require('bcrypt');

const router = express.Router();

// Create a user
router.post('/', async (req, res) => {
  try {
      console.log("user route ...")

    const { emailAddress, password, phoneNumber, role } = req.body;

    if(!emailAddress || !password || !phoneNumber || !role) {
      throw new Error(`fields must not be empty`)
    }
   
    const userData = { emailAddress, password, phoneNumber, role };
    console.log("user data ready ... ")
    const user = await UserService.createUser(userData);
    console.log("saved user object ready ...")
    res.status(201).json(`User created successful: ${JSON.stringify(user)}`);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error creating user.' });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving users.' });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving user.' });
  }
});

// Update a user
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { emailAddress, password, phoneNumber, role } = req.body;
    const userData = { emailAddress, password, phoneNumber, role };
    const user = await UserService.updateUser(id, userData);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user.' });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await UserService.deleteUser(id);
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user.' });
  }
});

module.exports = router;
