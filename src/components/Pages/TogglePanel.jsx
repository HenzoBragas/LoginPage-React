import React from "react";

const TogglePanel = ({ isActive, handleRegisterClick, handleLoginClick }) => (
  <div className="toggle-container">
    <div className="toggle">
      <div className={`toggle-panel toggle-left ${isActive ? "" : "hidden"}`}>
        <h1>Welcome Back!</h1>
        <p>Enter your personal details to use all of site features</p>
        <button onClick={handleLoginClick} className="btn-SignIn">Sign In</button>
      </div>
      <div className={`toggle-panel toggle-right ${isActive ? "hidden" : ""}`}>
        <h1>Hello, Friend!</h1>
        <p>Register with your personal details to use all of site features</p>
        <button onClick={handleRegisterClick} className="btn-SignUp">Sign Up</button>
      </div>
    </div>
  </div>
);

export default TogglePanel;
