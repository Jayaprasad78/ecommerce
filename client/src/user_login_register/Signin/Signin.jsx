import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const SignIn = ({ onSignIn }) => {  // Add onSignIn prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', { email, password });
      const { token, user } = response.data;  // Extract token and user data from response

      // Store the token in localStorage
      localStorage.setItem('token', token);
    
      
     

      const userName = response.data.user.name;  // Extract the username from response

      setSuccess("Sign in successful!");
      setError(null);

      // Show success alert
      alert("Sign in successful!");

     
      // Update the parent component with user data
      onSignIn({ name: userName });

      // Navigate to the home page
      navigate('/'); // Adjust the route as per your app's routing
    } catch (error) {
      setError(error.response?.data?.error || "Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign In</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
