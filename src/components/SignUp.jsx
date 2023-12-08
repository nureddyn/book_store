// SignUp.jsx
import React from "react";

export default function SignUp({ onClose }) {
  // Your Sign-Up logic here

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      {/* Your Sign-Up form and content go here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}
