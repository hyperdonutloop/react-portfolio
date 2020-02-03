import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <Link to="/" className="item">Home</Link>
        <Link to="/about" className="item">About</Link>
        <Link to="/projects" className="item">Projects</Link>
        <Link to="/contact" className="item">Contact</Link>
      </div>
    </div>
  )
}

export default Navigation;