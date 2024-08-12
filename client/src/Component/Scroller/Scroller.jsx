import React from 'react';
import { Link } from 'react-router-dom';
import electronics from '../../assets/image/electronics.png';
import fashion from '../../assets/image/fashion.png';
import sports from '../../assets/image/sports.png';
import health from '../../assets/image/health.png';
import stationary from '../../assets/image/stationary.png';
import automotive from '../../assets/image/automotive.png';
import kitchen from '../../assets/image/kitchen.png';
import petsupply from '../../assets/image/pet-supplies.png';
import beauty from '../../assets/image/makeup.png';
import gifts from '../../assets/image/gift.png';
import luggage from '../../assets/image/suitcase.png'; // Fixed typo

import './Scroller.css';

const items = [
    { src: electronics, label: 'Electronics', path: '/electronics' },
    { src: fashion, label: 'Fashion', path: '/fashion' },
    { src: sports, label: 'Sports', path: '/sports' },
    { src: health, label: 'Health', path: '/health' },
    { src: stationary, label: 'Stationary', path: '/stationary' },
    { src: automotive, label: 'Automotive', path: '/automotive' },
    { src: kitchen, label: 'Kitchen', path: '/kitchen' },
    { src: petsupply, label: 'Pet Supply', path: '/petsupply' },
    { src: beauty, label: 'MakeUp', path: '/beauty' },
    { src: gifts, label: 'Gifts', path: '/gifts' },
    { src: luggage, label: 'Luggage', path: '/luggage' }
];

function Scroller() {
    return (
        <div className="scroll-container">
           <div className="scroll-wrapper">
                {items.concat(items).map((item, index) => (
                    <Link key={index} to={item.path} className="scroll-item">
                        <img src={item.src} alt={item.label} />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Scroller;
