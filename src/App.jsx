import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SignUpForm from "./components/Auth/SignUpForm";
import SignInForm from "./components/Auth/SignInForm";
import TogglePanel from "./components/TogglePanel";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {


  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  return (
    <>
      <GoogleOAuthProvider clientId="886509980158-t91pom3qb1nfaru1h2ckg6h9ccapafsk.apps.googleusercontent.com
">
        <div className={`container ${isActive ? "active" : ""}`} id="container">
          <TogglePanel
            isActive={isActive}
            handleRegisterClick={handleRegisterClick}
            handleLoginClick={handleLoginClick}
          />
          <SignInForm />
          <SignUpForm />
        </div >
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
