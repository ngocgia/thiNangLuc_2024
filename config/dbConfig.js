const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost/thiNangLuc_database', 
      {useNewUrlParser: true});
      console.log('MongoDB Connected');
    } catch (err) {
      console.error('Connection to MongoDB failed:', err.message);
      process.exit(1);
    }
  };
  
  module.exports = { connectDB };