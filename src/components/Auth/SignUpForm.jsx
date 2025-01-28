
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useCreateAccount } from "../../hooks/Create/useCreateAccount";

const SignUpForm = () => {

  const {
    formData,
    handleData,
    handleSubmit,
  } = useCreateAccount("http://localhost:3000/users");

  return (
    <>
      <ToastContainer />
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <h1 className="CreateAccount">Create Account</h1>
          <div className="social-socialAuths">
            <button href="#" className="socialAuth">
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
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            value={formData.name || ''}
            name="name"
            onChange={handleData}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email || ''}
            name="email"
            onChange={handleData}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password || ''}
            name="password"
            onChange={handleData}
          />
          <button type="submit" className="btn-submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
