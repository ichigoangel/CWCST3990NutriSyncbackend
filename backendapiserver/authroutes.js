const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register
router.post('/signup', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send({ message: 'User registered' });
});

// Login
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send('User not found');
  res.send({ message: 'Login successful', user });
});

module.exports = router;
