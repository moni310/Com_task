


const mongoose = require("mongoose");

const Book = new mongoose.Schema({

  name:{type:String},
  imageUrl:{type:String},
  author:{type:String},
  pages:{type:String},
  price:{type:String}

});


module.exports = mongoose.model("book", Book);

