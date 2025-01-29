import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateAccount } from '../../hooks/Create/useCreateAccount';
import { useGoogleAuth } from '../../hooks/Create/useGoogleAccount';

const SignUpForm = () => {
  const { formData, handleData, handleSubmit } = useCreateAccount('http://localhost:3000/users');
  const { googleLogin, initializeGoogleLogin, isLoading } = useGoogleAuth('http://localhost:3000/users');

  // Inicializa o Google login após o componente ser montado
  useEffect(() => {
    const clientId = '886509980158-ifmc46l439dsusm2pq27du84dvnpkjsc.apps.googleusercontent.com';
    initializeGoogleLogin(clientId);
  }, [initializeGoogleLogin]);

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
                googleLogin();
              }}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : <i className="fa-brands fa-google-plus-g"></i>}
            </button>
            <button className="socialAuth" onClick={(e) => e.preventDefault()}>
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button className="socialAuth" onClick={(e) => e.preventDefault()}>
              <i className="fa-brands fa-github"></i>
            </button>
            <button className="socialAuth" onClick={(e) => e.preventDefault()}>
              <i className="fa-brands fa-linkedin-in"></i>
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
