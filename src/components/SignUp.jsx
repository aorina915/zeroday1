import React, { useState } from "react";
import SuccessPopup from "./SuccessPopup";

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [popup, setPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });

            const data = await res.json();

            if (res.ok) {
                setPopupMessage("Your account has been created successfully!");
                setPopup(true);

                // Optional: Clear form
                setUsername("");
                setEmail("");
                setPassword("");
            } else {
                setPopupMessage(data.message || "Signup failed");
                setPopup(true);
            }

        } catch (err) {
            setPopupMessage("Error connecting to the server");
            setPopup(true);
        }
    }

    return (
        <div className="form">
            <h2 className="signup-title">Sign Up</h2>

            <form className="signup-form" onSubmit={handleSubmit}>
                
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="signup-btn">
                    Sign Up
                </button>
            </form>

            {popup && (
                <SuccessPopup 
                    message={popupMessage}
                    onClose={() => setPopup(false)}
                />
            )}
        </div>
    );
}
