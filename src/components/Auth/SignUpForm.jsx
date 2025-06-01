import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useCreateAuth } from '../../hooks/Auth/useCreateAuth';
import { useGithubAuth } from '../../hooks/Auth/useGithubAuth';
import { useMicrosoftAuth } from '../../hooks/Auth/useMicrosoftAuth';
import { useGoogleAuth } from '../../hooks/Auth/useGoogleAuth';
import { useFacebookAuth } from '../../hooks/Auth/useFacebookAuth';
import { usePasswordView } from '../../hooks/ViewPassword/usePasswordView';


const SignUpForm = () => {
  const { formAuth, handleChange, handleSubmit, loadingCreate } = useCreateAuth();
  const { loading, loginWithGoogle } = useGoogleAuth();
  const { loadingGit, loginWithGithub } = useGithubAuth();
  const { loadingMic, loginWithMicrosoft } = useMicrosoftAuth();
  const { loadingFace, loginWithFacebook } = useFacebookAuth();
  const { isPasswordVisible, toggleVisibility } = usePasswordView();

  
  return (
    <>
      <ToastContainer />
      <div className="form-container sign-up">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className="CreateAccount">Create Account</h1>
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
              {loadingGit ? '...' : <i className="fa-brands fa-github"></i>}
            </button>
            <button
              className="socialAuth"
              onClick={(e) => {
                e.preventDefault();
                loginWithMicrosoft();
              }}
              disabled={loadingMic}
            >
              {loadingMic ? '...' : <i className="fa-brands fa-microsoft"></i>}
            </button>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formAuth.name || ''}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formAuth.email || ''}
            onChange={handleChange}
            required
          />
          <div className="inputPassword">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={formAuth.password || ''}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                toggleVisibility();
              }}
            >
              {isPasswordVisible ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </button>
          </div>
          {loadingCreate ? "..." : <button type="submit" className="btn-submit"> Sign Up
          </button>}

        </form>
      </div>
    </>
  );
};

export default SignUpForm;
