import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/image/logo.png';
import top_offers from '../../assets/image/discount.png';
import seller from '../../assets/image/seller.png';
import cart from '../../assets/image/cart.png';
import profile from '../../assets/image/user.png';

function Navbar({ onSearch, isAuthenticated, userName }) {
    const [searchQuery, setSearchQuery] = useState('');
    console.log(searchQuery)
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearch(searchQuery); // Update the search query state in App
            navigate('/searched-products'); // Redirect to the searched products page
        } else {
            
            navigate('/'); // Redirect to the home page if search query is empty
        }
    };

    const handleNavigateHome = () => {
        navigate('/'); // Navigate to the home page
        setSearchQuery(''); // Clear search query on home page navigation
    };

    return (
        <div className={`navbar ${isAuthenticated ? 'signed-in' : ''}`}>
            <div className='logo'>
                <div className='image-container' onClick={handleNavigateHome}>
                    <img className='logo-img' src={logo} alt="MarketRush Logo" />
                </div>
                <div className='text-container'>
                    <span className='text'>MarketRush</span>
                </div>
            </div>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search for products and items"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)} // Trigger search on Enter
                />
                <i className="fa fa-search" onClick={handleSearch}></i>
            </div>

            <div className='top-offer'>
                <img src={top_offers} alt="Top Offers" />
                <span>Top offers</span>
            </div>

            <div className='buttons'>
                <div className='button1'>
                    <button className='button1-class'>
                        <img src={seller} alt="Seller" />
                        <span>Become a Seller</span>
                    </button>
                </div>
                {!isAuthenticated ? (
                    <>
                        <div className='button2'>
                            <button onClick={() => navigate('/signin')}>Signin</button>
                        </div>
                        <div className='button3'>
                            <button onClick={() => navigate('/signup')}>Signup</button>
                        </div>
                    </>
                ) : (
                    <div className='user_greeting'>
                        <span>Welcome, {userName}</span>
                    </div>
                )}
            </div>

            <div className='cart_userprofile'>
                <div className='shoping_cart' onClick={() => navigate('/cart')}>
                    <img src={cart} alt="Cart" />
                    <span>Cart</span>
                </div>
                <div className='user_profile' onClick={() => navigate('/profile')}>
                    <img src={profile} alt="Profile" />
                    <span>{isAuthenticated ? userName : 'Profile'}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
