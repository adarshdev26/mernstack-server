const mongoose = require('mongoose');

// Define the schema for the 'register' collection
const RegisterSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, default: 'user' }
}, { timestamps: true });

// Create the model based on the schema, and let Mongoose handle the collection name
const Register = mongoose.model('Register', RegisterSchema);

module.exports = Register;
