const mongoose = require('mongoose');

// MongoDB URI
const uri = 'mongodb://localhost:27017/mernstack';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true }); // Removed useUnifiedTopology
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

// Export the function
module.exports = connectDB;
