const express = require('express');
const { addToCart, getCart, removeFromCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, addToCart);
router.get('/take', authMiddleware, getCart);
router.post('/remove', authMiddleware, removeFromCart);

module.exports = router;
