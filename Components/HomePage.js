import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to the Recruitment Portal</h1>
      <div className="homepage-links">
        <Link to="/login" className="button">Login</Link>
        <Link to="/signup" className="button">Sign Up</Link>
        <Link to="/about" className="button">About Us</Link>
      </div>
    </div>
  );
};

export default HomePage;
