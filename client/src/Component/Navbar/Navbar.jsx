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
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery);

        if (searchQuery.toLowerCase().includes('electronics')) {
            navigate('/electronics');
        } else if (searchQuery.toLowerCase().includes('beauty')) {
            navigate('/beauty');
        } else {
            navigate('/');
        }
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleCartNavigation = () => {
        navigate('/cart');
    };

    return (
        <div className={`navbar ${isAuthenticated ? 'signed-in' : ''}`}>
            <div className='logo'>
                <div className='image-container'>
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
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
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
                            <button onClick={() => handleNavigation('/signin')}>Signin</button>
                        </div>
                        <div className='button3'>
                            <button onClick={() => handleNavigation('/signup')}>Signup</button>
                        </div>
                    </>
                ) : (
                    <div className='user_greeting'>
                        <span>Welcome, {userName}</span>
                    </div>
                )}
            </div>

            <div className='cart_userprofile'>
                <div className='shoping_cart' onClick={handleCartNavigation}>
                    <img src={cart} alt="Cart" />
                    <span>Cart</span>
                </div>
                <div className='user_profile'>
                    <img src={profile} alt="Profile" />
                    <span>{isAuthenticated ? userName : 'Profile'}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
