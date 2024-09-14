const bcrypt = require('bcrypt');
const Register = require('../models/register');

// Controller to handle the POST request for login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Basic validation (could be extended as needed)
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Find the user by email
    const user = await Register.findOne({ email });
    
    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    // If the password is incorrect
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Password is correct, user is authenticated..
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { loginUser };
