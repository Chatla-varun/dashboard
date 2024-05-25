// Logout.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState('');

  useEffect(() => {
    // Perform logout actions (e.g., clear session, local storage)
    setIsLoggedIn(false); // Update authentication state to false (logged out)
    
    // Show logout message for a few seconds before redirecting
    setLogoutMessage('You have logged out successfully.');

    const timeoutId = setTimeout(() => {
      // Redirect to login page after showing message
      navigate('/');
    }, 3000); // Redirect after 3 seconds (adjust as needed)

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, [navigate, setIsLoggedIn]);

  return (
    <div>
      <p>{logoutMessage}</p>
    </div>
  );
};

export default Logout;
