const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  numberPhone: {
    type: String,
    required: true,
    unique: true,
  },
  fullName :{
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }, 
  role: {
    type: Number,
    default: 1
  }
});

userSchema.pre('save', function(next){
  const user = this
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash
    next()
  })
})

const User = mongoose.model('User', userSchema);

module.exports = User;
