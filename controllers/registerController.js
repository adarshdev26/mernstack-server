const bcrypt = require('bcrypt');
const Register = require('../models/register');
// Controller to handle the POST request for registration
const createUser = async (req, res) => {
  const { username, password, email } = req.body;

  // Basic validation (could be extended as needed)
  if (!username || !password || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    const newUser = new Register({
      username,
      password: hashedPassword,
      email,
      role: 'user' 
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createUser };



