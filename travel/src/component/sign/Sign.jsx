// Sign.js (Signup component)
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./Sign.css";

// Firebase config (for Google sign-in)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

initializeApp(firebaseConfig);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/planning"); // Navigate to Planning page after Google sign-in
    } catch (error) {
      setError("Google sign-in failed. Try again.");
      console.error("Error during Google sign-in:", error);
    }
  };

  const handleInstagramLogin = () => {
    const clientId = "YOUR_INSTAGRAM_CLIENT_ID";
    const redirectUri = "http://localhost:3000/instagram-auth"; // Update for production
    const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile&response_type=code`;
    window.location.href = instagramAuthUrl;
  };

  const handleEmailSignup = (e) => {
    e.preventDefault();
    navigate("/planning"); // Navigate to Planning page after form submission
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}

        <button onClick={handleGoogleSignup} className="google-button">
          <span className="google-icon">G</span> Continue with Google
        </button>

        <button onClick={handleInstagramLogin} className="instagram-button">
          <span className="instagram-icon">I</span> Continue with Instagram
        </button>

        <div className="divider">or</div>

        <form onSubmit={handleEmailSignup}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
