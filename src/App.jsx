import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import TogglePanel from "./components/TogglePanel";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <TogglePanel
        isActive={isActive}
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
      />
      <SignInForm />
      <SignUpForm />
      
    </div>
  );
};

export default App;
