import { ToastContainer } from "react-toastify";
import useGoogleLoginAuth from '../../Auth/useGoogleLoginAuth'
import 'react-toastify/dist/ReactToastify.css';


const SignInForm = () => {
  const {
    formAuth,
    isAuthenticated,
    googleLogin,
    handleAuth,
    handleSubmit,
  } = useGoogleLoginAuth("http://localhost:3000/users");

  


  return (
    <>
      < ToastContainer />
      <div className="form-container sign-in">

        <form onSubmit={handleSubmit}>
          <h1 className="SignIn">Sign In</h1>
          <div className="social-icons">
            <button href="#" className="socialAuth" onClick={googleLogin}>
              <i className="fa-brands fa-google-plus-g"></i>
            </button>
            <button href="#" className="socialAuth">
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button href="#" className="socialAuth">
              <i className="fa-brands fa-github"></i>
            </button>
            <button href="#" className="socialAuth">
              <i className="fa-brands fa-linkedin-in"></i>
            </button>
          </div>
          <span>or use your email password</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleAuth}
          />
          <input
            type="password"
            name="current-password"
            placeholder="Password"
            onChange={handleAuth}
          />
          <a href="#">Forget Your Password?</a>
          <button type="submit" className="btn-submit">Sign In</button>
        </form>


      </div>
    </>
  )
};

export default SignInForm;
