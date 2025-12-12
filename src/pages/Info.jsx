import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <div className="info-container">
      <h1 className="info-title">About Our Web App</h1>
      <p className="info-text">
        This platform provides seamless navigation, user and admin access, and 
        an optimized experience for all visitors. Learn more about how the system 
        works and how you can get started.
      </p>

      <h2 className="info-subtitle">Contact Us</h2>
      <p className="info-text">
        Email: support@example.com <br />
        Phone: +254 712 345 678 <br />
        Address: Nairobi, Kenya
      </p>
    </div>
  );
}
