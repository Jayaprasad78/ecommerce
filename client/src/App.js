import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Adjust path if needed
import Navbar from './Component/Navbar/Navbar';
import Scroller from './Component/Scroller/Scroller';
import Carousel from './Component/Carousel/Carousel';
import TopProducts from './Component/top Products/top_products';
import TopSmartPhones from './Component/top_delas_on_smart_phones/top_products';
import TopBrands from './Component/Featured Brands/top_products';
import Footer from './Component/Footer/Fotter';
import Electronics_page from './pages/electronics_page/electronics';
import Automotive_page from './pages/automotive_page/automotive';
import Beauty_page from './pages/beauty_page/beauty';
import Fashion_page from './pages/fashion_page/fashion';
import Gifts_page from './pages/gifts_page/gifts';
import Health_page from './pages/health_page/health';
import Kitchen_page from './pages/kitchen_page/kitchen';
import Luggage_page from './pages/lugaagage_page/lugaagage';
import Makeup_page from './pages/makeup_page/makeup';
import Petsupply_page from './pages/petsupply_page/petsupply';
import Sports_page from './pages/sports_page/sports';
import Stationary_page from './pages/stationary_page/stationary';
import SignIn from './user_login_register/Signin/Signin';
import SignUp from './user_login_register/Signup/Signup';
import Cart from './Component/Cart/Cart'; // Import Cart
import Checkout from './Component/Checkout/Checkout';

import electronics from './assets/image/electronics.png';
import fashion from './assets/image/fashion.png';
import sports from './assets/image/sports.png';
import automotive from './assets/image/automotive.png';
import stationary from './assets/image/stationary.png';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSignIn = (user) => {
    setIsAuthenticated(true);
    setUserName(user.name);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const images = [electronics, fashion, sports, automotive, stationary];

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar onSearch={handleSearch} isAuthenticated={isAuthenticated} userName={userName} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Scroller />
                  <Carousel images={images} />
                  <TopProducts />
                  <TopSmartPhones />
                  <TopBrands />
                </>
              }
            />
            <Route path="/electronics" element={<Electronics_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
            <Route path="/automotive" element={<Automotive_page />} />
            <Route path="/beauty" element={<Beauty_page searchQuery={searchQuery} />} />
            <Route path="/fashion" element={<Fashion_page />} />
            <Route path="/gifts" element={<Gifts_page />} />
            <Route path="/health" element={<Health_page />} />
            <Route path="/kitchen" element={<Kitchen_page />} />
            <Route path="/luggage" element={<Luggage_page />} />
            <Route path="/makeup" element={<Makeup_page />} />
            <Route path="/petsupply" element={<Petsupply_page />} />
            <Route path="/sports" element={<Sports_page />} />
            <Route path="/stationary" element={<Stationary_page />} />
            <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/cart" element={<Cart isAuthenticated={isAuthenticated} />} />
            <Route path="/checkout" element={< Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
