const Register = require('../models/register');

const getUsers = async (req, res) => {
  try {
    const users = await Register.find({});
    res.status(200).json(users); 
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const getUserByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await Register.findOne({ username });
    if (user) {
      res.status(200).json(user); 
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {getUsers, getUserByUsername };
