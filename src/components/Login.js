import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import Login.css for component styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if username and password match the credentials
    if (username === 'admin@visyscloudtech.com' && password === 'Visys@123$') {
      // Navigate to the home page on successful login
      navigate('/home');
    } else {
      alert('Invalid credentials. Please try again.');
      // Reset form after login attempt
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
