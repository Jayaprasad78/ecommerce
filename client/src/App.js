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
import FashionProducts_page from './pages/fashion_page/fashion';
import Sportsproduct_page from './pages/sports_page/sports';
import  Health_page from './pages/health_page/health'
import Stationary_page from './pages/stationary_page/stationary'
import Automotive_page from './pages/automotive_page/automotive'
import Kitchen_page  from './pages/kitchen_page/kitchen'
import Petsupply_page from './pages/petsupply_page/petsupply'
import Beauty_page from './pages/beauty_page/beauty'
import Gifts_page from './pages/gifts_page/gifts'
import Luggage_page from './pages/lugaagage_page/lugaagage'



import SignIn from './user_login_register/Signin/Signin';
import SignUp from './user_login_register/Signup/Signup';
import Cart from './Component/Cart/Cart';
import Checkout from './Component/Checkout/Checkout';
import banner1 from './assets/image/banner1.jpeg';
import banner2 from './assets/image/banner2.jpg';
import banner3 from './assets/image/banner3.png';
import { 
  topProducts,
  top_delas_on_smart_phones ,
  electronicsProducts,
  beautyProducts,
  fashionProducts,
  sportsProducts,
  healthProducts,
  stationaryProducts,
  automotiveProducts,
  kitchenProducts,
  petSupplyProducts,
  giftProducts,
  luggageProducts
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
  ...top_delas_on_smart_phones ,
  ...electronicsProducts,
  ...fashionProducts,
  ...sportsProducts,

  ...beautyProducts,
  
 
  ...healthProducts,
  ...stationaryProducts,
  ...automotiveProducts,
  ...kitchenProducts,
  ...petSupplyProducts,
  ...giftProducts,
  ...luggageProducts
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
          <Route path="/fashion" element={<FashionProducts_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/sports" element={<Sportsproduct_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/health" element={<Health_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/stationary" element={<Stationary_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/automotive" element={<Automotive_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/kitchen" element={< Kitchen_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/petsupply" element={< Petsupply_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/beauty" element={< Beauty_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/gifts" element={< Gifts_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />
          <Route path="/luggage" element={< Luggage_page searchQuery={searchQuery} isAuthenticated={isAuthenticated} />} />

          
         

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
