

const Cart = require('../models/Cart'); // Adjust the path to your Cart model
const User = require('../models/User'); // Adjust the path to your User model
const jwt = require('jsonwebtoken');

exports.addToCart = async (req, res) => {
    const { productName, price, image, quantity } = req.body;
    console.log("your details is ",req.body)
    const userEmail = req.user.email; // Extract userEmail from req.user
    console.log(userEmail)
  
    if (!productName || !price || !image || !quantity) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      let cart = await Cart.findOne({ userEmail });
  
      if (cart) {
        const itemIndex = cart.items.findIndex(item => item.productName === productName);
  
        if (itemIndex > -1) {
          cart.items[itemIndex].quantity += quantity;
        } else {
          cart.items.push({ productName, price, image, quantity });
        }
      } else {
        cart = new Cart({
          userEmail,
          items: [{ productName, price, image, quantity }]
        });
      }
  
      await cart.save();
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


  
  
  exports.getCart = async (req, res) => {
    try {
        console.log("hi")
      // Extract token from headers
      const token = req.headers.authorization.split(' ')[1]; // Assuming 'Bearer [token]'
    
      
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userEmail = decodedToken.email;
     

     
     const cart = await Cart.findOne({ userEmail: userEmail })

     console.log("Cart item from database:", cart); // Log the fetched cart item
    
     if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      // Send only the items array to the frontend
      res.status(200).json({ items: cart.items });
    } catch (err) {
      console.error("Error fetching cart:", err.message); // Log error
      res.status(500).json({ error: err.message });
    }
  
  };
  




exports.removeFromCart = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(400).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
