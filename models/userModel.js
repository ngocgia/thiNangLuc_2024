const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  numberPhone: {
    type: String,
    required: true,
    unique: true,
    // sparse:true
  },
  fullName :{
    type: String,
    required: true,
    // unique: true
  },
  address: {
    type: String,
    required: true,
    // unique: true
  },
  password: {
    type: String,
    required: true
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
