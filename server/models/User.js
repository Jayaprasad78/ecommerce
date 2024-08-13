const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true } // Optional, adds an _id to each item
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cart: [cartItemSchema] // Directly storing product details in the cart array
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
