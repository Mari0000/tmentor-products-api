const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  brand: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    id: {
        type: Number
    },
    name: {
        type: String
    }
  }
},
{
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;