import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [address, setAddress] = useState('');
    const [paymentMethod] = useState('Cash'); // Only Cash on Delivery
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            toast.success('Order placed successfully! A confirmation email has been sent.');
            setAddress('');
            setEmail('');

            setTimeout(() => {
                navigate('/');
            }, 2000);

            setIsSubmitting(false);
        }, 1000);
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
                        placeholder="Enter your delivery address here"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Payment Method:</label>
                    <div className="payment-method">
                        <input
                            type="radio"
                            id="cash"
                            name="paymentMethod"
                            value="Cash"
                            checked
                            readOnly
                        />
                        <label htmlFor="cash">Cash on Delivery</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button type="submit" disabled={isSubmitting} className="submit-button">
                    {isSubmitting ? 'Submitting...' : 'Place Order'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;
