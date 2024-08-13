

// const Cart = require('../models/Cart'); // Adjust the path to your Cart model
const User = require('../models/User'); // Adjust the path to your User model
const jwt = require('jsonwebtoken');

exports.additem_array = async (req, res) => {
    try {
        const { productName, price, image, quantity } = req.body;
        const userEmail = req.user.email; // Extract userEmail from req.user

        if (!productName || !price || !image || !quantity) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        let user = await User.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the product already exists in the cart
        const existingProduct = user.cart.find(
            (item) => item.productName === productName
        );

        if (existingProduct) {
            // If the product exists, increase the quantity
            existingProduct.quantity += quantity;
        } else {
            // If the product does not exist, add a new entry to the cart
            user.cart.push({ productName, price, image, quantity });
        }

        // Save the updated user document
        await user.save();

        return res.status(200).json({ message: 'Cart updated successfully', cart: user.cart });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
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
     
     const user = await User.findOne({ email: userEmail })

     if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Send the user's cart as the response
    res.status(200).json({ cart: user.cart });

     
    
    
    } catch (err) {
      console.error("Error fetching cart:", err.message); // Log error
      res.status(500).json({ error: err.message });
    }
  
  };
  




  exports.removeFromCart = async (req, res) => {
    try {
        const userEmail = req.user.email; // Extract userEmail from req.user (assuming you're using authentication)
        const cartItemId = req.params.itemId; // Get the cart item ID from the route parameters
        
        // Find the user by their email
        let user = await User.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Function to remove a product from the cart
        function removeProductFromCart(cart, productId) {
            const index = cart.findIndex(item => item._id.toString() === productId);
            if (index !== -1) {
                cart.splice(index, 1);
                return true; // Product was found and removed
            }
            return false; // Product was not found in the cart
        }

        const isRemoved = removeProductFromCart(user.cart, cartItemId);

        if (isRemoved) {
            // Save the updated user document after removing the item
            await user.save();
            return res.status(200).json({ message: 'Item removed successfully', cart: user.cart });
        } else {
            return res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

   

  