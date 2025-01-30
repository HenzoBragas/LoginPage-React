import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateAccount } from '../../hooks/Create/useCreateAccount';
import { useGithubAuth } from '../../hooks/Auth/useGithubAuth';
import useGoogleAccount from '../../hooks/Create/useGoogleAccount';
import { useMicrosoftAuth } from '../../hooks/Auth/useMicrosoftAuth';

const SignUpForm = () => {
  const { formData, handleData, handleSubmit } = useCreateAccount('http://localhost:3000/users');
  const { user, loading, loginWithGoogle, logout } = useGoogleAccount(); // Usando o hook
  const { userGit, loadingGit, loginWithGithub, logoutGit } = useGithubAuth();
  const { userMic, loadingMic, loginWithMicrosoft, logoutMic} = useMicrosoftAuth();

  return (
    <>
      <ToastContainer />
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <h1 className="CreateAccount">Create Account</h1>
          <div className="social-socialAuths">
            <button
              className="socialAuth"
              onClick={(e) => {
                e.preventDefault();
                loginWithGoogle(); // Chama a função do hook
              }}
              disabled={loading} // Usa o estado de loading retornado do hook
            >
              {loading ? '...' : <i className="fa-brands fa-google-plus-g"></i>}
            </button>

            
            <button className="socialAuth" onClick={(e) => e.preventDefault()}>
              <i className="fa-brands fa-facebook-f"></i>
            </button>

            <button className="socialAuth"
              onClick={(e) => {
                e.preventDefault();
                loginWithGithub();
              }}
              disabled={loadingGit}
            >
              {loadingGit ? "..." : <i className="fa-brands fa-github"></i>}
            </button>

            <button className="socialAuth" 
            onClick={(e) => {
              e.preventDefault();
              loginWithMicrosoft();
            }}
            disabled={loadingMic}
            >
              {loadingMic ? "..." : <i className="fa-brands fa-microsoft"></i>}
            </button>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            value={formData.name || ''}
            name="name"
            onChange={handleData}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email || ''}
            name="email"
            onChange={handleData}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password || ''}
            name="password"
            onChange={handleData}
            required
          />
          <button type="submit" className="btn-submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
