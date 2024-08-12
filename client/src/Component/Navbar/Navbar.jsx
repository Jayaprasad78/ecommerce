// src/Navbar.js
import React from 'react';

import './Navbar.css';
import logo from '../../assets/image/logo.png';
import top_offers from '../../assets/image/discount.png';
import seller from '../../assets/image/seller.png';
import cart from '../../assets/image/cart.png';
import profile from '../../assets/image/user.png';
function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <div className='image-container'>
                <img className='logo-img'src={logo}></img>
                </div>
                
               
                <div className='text-container'>
                    <span className='text'>MarketRush</span>
                </div>
            </div> 

            <div class="search-box">
                <input  type="text" placeholder="Search for products and items"/>
                 <i class="fa fa-search"  ></i>  
            </div>

            <div className='top-offer'>
            <img src={top_offers}></img>
            <span>Top offers</span>

            </div>


            <div className='buttons'>
                <div className='button1'>
                    <button className='button1-class'><img src={seller}></img><span>Become a Seller</span></button>
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
               <img src={cart}></img>
               <span>cart</span>
            </div>
            <div className='user_profile'>
            <img src={profile}></img>
            <span>profile</span>
            </div>


            </div> 
           
            
        </div>


        
    );
}

export default Navbar;
