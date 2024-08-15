import React from 'react';
import PropTypes from 'prop-types';
import './alert.css'; // External CSS for styling the alert

const Alert = ({ message, navigateTo, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose(navigateTo); // Call the onClose function with the navigateTo value
    }
  };

  return (
    <div className="overlay">
      <div className="alert-box">
        <h2>Alert!</h2>
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired, // New prop to determine the page to navigate to
  onClose: PropTypes.func.isRequired,
};

export default Alert;
