const express = require('express');
const { additem_array,getCart,removeFromCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/additem', authMiddleware, additem_array);
router.get('/take', authMiddleware, getCart);
 router.delete('/remove/:itemId', authMiddleware, removeFromCart);

module.exports = router;
