import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const SignUp = () => {
  const [name, setName] = useState('');  // Add state for name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { name, email, password, confirmPassword });

      setSuccess("Sign up successful! You can now sign in.");
      setError(null);
    } catch (error) {
      console.error('Error details:', error);
      setError(error.response?.data?.error || "Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign Up</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
