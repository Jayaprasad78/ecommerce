import React, { useEffect, useState } from 'react';
import './addcartmsg.css';

const Message = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    // Hide the message after 3 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`message-container ${show ? 'show' : 'hide'}`}>
        
      Items added to cart
    </div>
  );
};

export default Message;