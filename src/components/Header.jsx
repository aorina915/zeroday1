import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
        <img className="logo" src="/0.jpg" alt="Zero Day Company ONE" />

        <nav className="nav-links">
            <Link to="/" className="nav-items">Home</Link>
            <Link to="/services" className="nav-items">Services</Link>
            <Link to="/info" className="nav-items">Contact</Link>  {/* FIXED */}
            <Link to="/signup" className="nav-items">Sign Up</Link>
        </nav>
    </header>
  );
}
