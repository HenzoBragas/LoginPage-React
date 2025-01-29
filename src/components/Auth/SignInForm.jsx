import { ToastContainer } from "react-toastify";
import useGoogleLoginAuth from '../../hooks/Auth/useGoogleLoginAuth'
import 'react-toastify/dist/ReactToastify.css';
import { useLoginAuth } from "../../hooks/Auth/useLoginAuth";


const SignInForm = () => {
  const {
    isAuthenticated,
    googleLogin,
  } = useGoogleLoginAuth("http://localhost:3000/users");

  const {
    formAuth,
    handleAuth,
    handleSubmit,
  } = useLoginAuth("http://localhost:3000/users");

  return (
    <>
      < ToastContainer />
      <div className="form-container sign-in">

        <form onSubmit={handleSubmit}>
          <h1 className="SignIn">Sign In</h1>
          <div className="social-icons">
            <button
              className="socialAuth"
              onClick={(e) => {
                e.preventDefault();
                googleLogin();
              }}
            >
              <i className="fa-brands fa-google-plus-g"></i>
            </button>
            <button
              className="socialAuth"
      
            >
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button
              className="socialAuth"
              onClick={(e) => {
                e.preventDefault();
                loginWithGithub();
              }}
            >
              <i className="fa-brands fa-github"></i>
            </button>
            <button
              className="socialAuth"

            >
              <i className="fa-brands fa-linkedin-in"></i>
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
          <input
            type="password"
            name="current-password"
            placeholder="Password"
            onChange={handleAuth}
            required
          />
          <a href="#">Forget Your Password?</a>
          <button type="submit" className="btn-submit">Sign In</button>
        </form >


      </div >
    </>
  )
};

export default SignInForm;
