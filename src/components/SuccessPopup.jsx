import React from "react";
import { motion } from "framer-motion";

export default function SuccessPopup({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <motion.div 
        className="popup-box"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2>🎉 Success!</h2>
        <p>{message}</p>
        <button className="popup-btn" onClick={onClose}>OK</button>
      </motion.div>
    </div>
  );
}
