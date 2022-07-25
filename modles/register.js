const mongoose = require("mongoose");

const register = new mongoose.Schema({

  userName:{type:String},
  email:{type:String},
  password:{type:String},
  token:{type:String}

});


module.exports = mongoose.model("Register", register);

