// controllers/cartController.js
const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    try {
        let cart = await Cart.findOne({ user: userId });
        if (cart) {
            const itemIndex = cart.items.findIndex(item => item.productId == productId);

            if (itemIndex > -1) {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
            } else {
                cart.items.push({ productId, quantity });
            }

            cart = await cart.save();
            return res.status(200).json(cart);
        } else {
            const newCart = await Cart.create({
                user: userId,
                items: [{ productId, quantity }]
            });
            return res.status(201).json(newCart);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('items.productId');
        if (!cart) return res.status(400).json({ message: 'Cart not found' });

        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.removeFromCart = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id;

    try {
        let cart = await Cart.findOne({ user: userId });
        if (!cart) return res.status(400).json({ message: 'Cart not found' });

        const itemIndex = cart.items.findIndex(item => item.productId == productId);

        if (itemIndex > -1) {
            cart.items.splice(itemIndex, 1);
            cart = await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(400).json({ message: 'Product not found in cart' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
