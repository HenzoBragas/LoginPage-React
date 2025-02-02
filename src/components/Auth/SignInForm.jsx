import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useGoogleAuth } from '../../hooks/Auth/useGoogleAuth';
import { useLoginAuth } from "../../hooks/Auth/useLoginAuth";
import { useMicrosoftAuth } from "../../hooks/Auth/useMicrosoftAuth";
import { useGithubAuth } from '../../hooks/Auth/useGithubAuth';
import { useFacebookAuth } from '../../hooks/Auth/useFacebookAuth';
import { usePasswordView } from "../../hooks/ViewPassword/usePasswordView";
import ChangePasswordPopup from '../Pages/ChangePasswordPoup';

const SignInForm = () => {
  const { user, loading, loginWithGoogle } = useGoogleAuth();
  const { formAuth, handleAuth, handleSubmit } = useLoginAuth("http://localhost:3000/users");
  const { userGit, loadingGit, loginWithGithub } = useGithubAuth();
  const { userMic, loadingMic, loginWithMicrosoft } = useMicrosoftAuth();
  const { userFace, loadingFace, loginWithFacebook } = useFacebookAuth();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { isPasswordVisible, toggleVisibility } = usePasswordView();

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
            onChange={handleAuth}
            required
          />
          <div className="inputPassword">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="current-password"
              placeholder="Password"
              onChange={handleAuth}
              required
            />
            <button  type="button" onClick={(e) => { e.preventDefault(); toggleVisibility(); }}>
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
          <button type="submit" className="btn-submit">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
