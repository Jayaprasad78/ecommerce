import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import SearchedProductsPage from './Component/serched_products/searched_products';
import Navbar from './Component/Navbar/Navbar';
import Scroller from './Component/Scroller/Scroller';
import Carousel from './Component/Carousel/Carousel';
import TopProducts_page from './Component/top Products/top_products';
import Top_delas_on_smart_phones_page from './Component/top_delas_on_smart_phones/top_delas_on_smartphone';
import Footer from './Component/Footer/Fotter';
import Electronics_page from './pages/electronics_page/electronics';
import Fashion_page from './pages/fashion_page/fashion';
import SignIn from './user_login_register/Signin/Signin';
import SignUp from './user_login_register/Signup/Signup';
import Cart from './Component/Cart/Cart';
import Checkout from './Component/Checkout/Checkout';
import banner1 from './assets/image/banner1.jpeg';
import banner2 from './assets/image/banner2.jpg';
import banner3 from './assets/image/banner3.png';
import { 
  topProducts,
  top_delas_on_smart_phones,
  electronicsProducts,
  fashionProducts
} from './Products/Products';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const location = useLocation();

  const handleSignIn = (user) => {
    setIsAuthenticated(true);
    setUserName(user.name);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setSearchQuery('');
    }
  }, [location.pathname]);

  const allProducts = [
    ...topProducts,
    ...top_delas_on_smart_phones,
    ...electronicsProducts,
    ...fashionProducts
  ];
  
  const images = [banner1, banner2, banner3];

  return (
    <CartProvider>
      <div className="App">
        <Navbar onSearch={handleSearch} isAuthenticated={isAuthenticated} userName={userName} />
        <Routes>
          <Route path="/" element={
            <>
              <Scroller />
              <Carousel images={images} />
              <TopProducts_page searchQuery={''} isAuthenticated={isAuthenticated} />
              <Top_delas_on_smart_phones_page />
            </>
          } />
          <Route path="/searched-products" element={<SearchedProductsPage searchQuery={searchQuery} products={allProducts} isAuthenticated={isAuthenticated} />} />
          <Route path="/electronics" element={<Electronics_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/fashion" element={<Fashion_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart isAuthenticated={isAuthenticated} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
