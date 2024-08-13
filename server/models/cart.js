const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const CartSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  items: [CartItemSchema]
});

module.exports = mongoose.model('Cart', CartSchema);
