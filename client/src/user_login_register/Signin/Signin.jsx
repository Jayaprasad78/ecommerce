import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '../../Component/Alert/alert'; // Import the Alert component
import './Signin.css';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState(null); // State to handle the alert message
  const [navigateTo, setNavigateTo] = useState(null); // State to handle the page to navigate on alert close
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', { email, password });
      const { token, user } = response.data; // Extract token and user data from response

      // Store the token in localStorage
      localStorage.setItem('token', token);

      const userName = user.name; // Extract the username from response

      // Set alert for successful sign-in
      setAlertMessage("Sign in successful!");
      setNavigateTo('/'); // Redirect to home page after successful sign-in
      onSignIn({ name: userName }); // Update the parent component with user data

    } catch (error) {
      // Handle different error scenarios
      if (error.response && error.response.status === 400) {
        setAlertMessage("Username not found.");
      } else if (error.response && error.response.status === 401) {
        setAlertMessage("Invalid credentials.");
      } else {
        setAlertMessage("Failed to sign in. Please try again.");
      }
      setNavigateTo(null); // Do not navigate on error
    }
  };

  const handleAlertClose = (pageToNavigate) => {
    if (pageToNavigate) {
      navigate(pageToNavigate); // Redirect to the page on alert close
    }
    setAlertMessage(null); // Reset the alert message
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign In</h2>

      {/* Show alert if there is an alert message */}
      {alertMessage && (
        <Alert
          message={alertMessage}
          navigateTo={navigateTo} // This will be '/' if sign-in is successful, otherwise null
          onClose={handleAlertClose}
        />
      )}

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
