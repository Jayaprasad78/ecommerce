import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate to different pages
import './Navbar.css';
import logo from '../../assets/image/logo.png';
import top_offers from '../../assets/image/discount.png';
import seller from '../../assets/image/seller.png';
import cart from '../../assets/image/cart.png';
import profile from '../../assets/image/user.png';

function Navbar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery); // Pass the search query to the parent component

        // Navigate to the appropriate page based on search query
        if (searchQuery.toLowerCase().includes('electronics')) {
            navigate('/electronics');
        } else if (searchQuery.toLowerCase().includes('beauty')) {
            navigate('/beauty');
        } else {
            // You can navigate to a general search results page or stay on the home page
            navigate('/');
        }
    };

    return (
        <div className='navbar'>
            <div className='logo'>
                <div className='image-container'>
                    <img className='logo-img' src={logo} alt="MarketRush Logo"/>
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
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)} // Trigger search on Enter key
                />
                <i className="fa fa-search" onClick={handleSearch}></i>  
            </div>

            <div className='top-offer'>
                <img src={top_offers} alt="Top Offers"/>
                <span>Top offers</span>
            </div>

            <div className='buttons'>
                <div className='button1'>
                    <button className='button1-class'><img src={seller} alt="Seller"/><span>Become a Seller</span></button>
                </div>
                <div className='button2'>
                    <button>Signin</button>
                </div>
                <div className='button3'>
                    <button>Signup</button>
                </div>
            </div>

            <div className='cart_userprofile'>
                <div className='shoping_cart'>
                    <img src={cart} alt="Cart"/>
                    <span>cart</span>
                </div>
                <div className='user_profile'>
                    <img src={profile} alt="Profile"/>
                    <span>profile</span>
                </div>
            </div> 
        </div>
    );
}

export default Navbar;
