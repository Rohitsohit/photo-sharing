import React from 'react'
import '../css/navbar.css'

export default function Navbar() {
  return (
    <>
    
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Logo</a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contact</a>
          </li>
        </ul>
        <div className="navbar-auth">
          <a href="/login" className="navbar-link">Login</a>
          <a href="/signup" className="navbar-link">Signup</a>
        </div>
      </div>
    </nav>
    
    
    
    </>
  )
}
