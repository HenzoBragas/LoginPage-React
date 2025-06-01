import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useGoogleAuth } from '../../hooks/Auth/useGoogleAuth';
import { useLoginAuth } from "../../hooks/Auth/useLoginAuth";
import { useMicrosoftAuth } from "../../hooks/Auth/useMicrosoftAuth";
import { useGithubAuth } from '../../hooks/Auth/useGithubAuth';
import { useFacebookAuth } from '../../hooks/Auth/useFacebookAuth';
import { usePasswordView } from "../../hooks/ViewPassword/usePasswordView";
import ChangePasswordPopup from '../Pages/ChangePasswordPoup';
import { useLocation } from "react-router-dom"; 
import 'react-toastify/dist/ReactToastify.css';

const SignInForm = () => {
  const location = useLocation();
  const { loading, loginWithGoogle } = useGoogleAuth();
  const { loadingLogin, formAuth, handleChange, handleSubmit } = useLoginAuth();
  const { loadingGit, loginWithGithub } = useGithubAuth();
  const { loadingMic, loginWithMicrosoft } = useMicrosoftAuth();
  const { loadingFace, loginWithFacebook } = useFacebookAuth();
  const { isPasswordVisible, toggleVisibility } = usePasswordView();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

   useEffect(() => {
    const timeout = setTimeout(() => {
      toast.dismiss();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <ChangePasswordPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <ToastContainer />
      <div className="form-container sign-in">
        <form onSubmit={handleSubmit}>
          <h1 className="SignIn">Sign In</h1>
          <div className="social-icons">
            <button
              className="socialAuth"
              onClick={(e) => {
                e.preventDefault();
                loginWithGoogle();
              }}
              disabled={loading}
            >
              {loading ? '...' : <i className="fa-brands fa-google-plus-g"></i>}
            </button>
            <button
              className="socialAuth"
              onClick={(e) => {
                e.preventDefault();
                loginWithFacebook();

              }}
              disabled={loadingFace}
            >
              {loadingFace ? '...' : <i className="fa-brands fa-facebook-f"></i>}
            </button>
            <button
              className="socialAuth"
              onClick={(e) => {
                e.preventDefault();
                loginWithGithub();
              }}
              disabled={loadingGit}
            >
              {loadingGit ? "..." : <i className="fa-brands fa-github"></i>}
            </button>
            <button
              className="socialAuth"
              onClick={(e) => {
                e.preventDefault();
                loginWithMicrosoft();
              }}
              disabled={loadingMic}
            >
              {loadingMic ? "..." : <i className="fa-brands fa-microsoft"></i>}
            </button>
          </div>
          <span>or use your email password</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formAuth.email || ""}
            required
          />
          <div className="inputPassword">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formAuth.password || ""}
              required
            />
            <button type="button" onClick={(e) => { e.preventDefault(); toggleVisibility(); }}>
              {isPasswordVisible ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </button>
          </div>
          <div className={isPopupOpen ? "disabled-screen" : ""}></div>
          <button
            className="forgot"
            onClick={() => setIsPopupOpen(true)}
            type="button"
          >
            Forgot Your Password?
          </button>
          {loadingLogin ? ".... " : <button type="submit" className="btn-submit">Sign In</button>}
        </form>
      </div>
    </>
  );
};

export default SignInForm;
