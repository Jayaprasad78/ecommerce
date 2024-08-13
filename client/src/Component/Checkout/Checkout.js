
// src/components/Checkout.js
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';
import { Navigate,useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        // Simulate API call
        setTimeout(() => {
            // Mock success response
            toast.success('Order placed successfully! Mail sent to your email.');
    
            // Reset form fields
            setAddress('');
            setPaymentMethod('');
            setEmail('');
    
            // Navigate to home page after a short delay to ensure toast is visible
            setTimeout(() => {
                navigate('/');
            }, 2000); // Adjust the delay to match the toast duration
    
            setIsSubmitting(false);
        }, 1000); // Simulate network delay
    };
    

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Payment Method:</label>
                    <div>
                        <input
                            type="radio"
                            id="cash"
                            name="paymentMethod"
                            value="Cash"
                            checked={paymentMethod === 'Cash'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label htmlFor="cash">Cash</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="upi"
                            name="paymentMethod"
                            value="UPI"
                            checked={paymentMethod === 'UPI'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label htmlFor="upi">UPI</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="credit-card"
                            name="paymentMethod"
                            value="Credit Card"
                            checked={paymentMethod === 'Credit Card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label htmlFor="credit-card">Credit Card</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Place Order'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;
