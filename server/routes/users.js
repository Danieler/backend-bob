const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, bags } = req.body;
    if (typeof name !== 'string') {
      throw new Error('Password must be a string.');
    }
    const user = new User({ name, bags });
    const persistedUser = await user.save();

    res
      .status(201)
      .json({
        title: 'User Added Successful',
        detail: 'Successfully added new user',
      });
  } catch (err) {
    res.status(400).json({
      errors: [
        {
          title: 'Adding Error',
          detail: 'Something went wrong during adding process.',
          errorMessage: err.message,
        },
      ],
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(400).json({
      errors: [
        {
          title: 'Users Error',
          detail: 'Failed retrieving users',
          errorMessage: err.message,
        },
      ],
    });
  }
});

module.exports = router;
