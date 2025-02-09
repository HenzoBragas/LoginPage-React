import React, { useState } from "react";
import SignUpForm from "./components/Auth/SignUpForm";
import SignInForm from "./components/Auth/SignInForm";
import TogglePanel from "./components/Pages/TogglePanel";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {


  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  const isHomePage = location.pathname === "/home";


  return (
    <>

      <GoogleOAuthProvider clientId="886509980158-ifmc46l439dsusm2pq27du84dvnpkjsc.apps.googleusercontent.com">
        <div className={`container ${isActive ? "active" : ""} ${isHomePage ? "home-page" : ""} `} id="container">
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
