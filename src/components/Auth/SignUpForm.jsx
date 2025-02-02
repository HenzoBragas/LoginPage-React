import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useCreateAccount } from '../../hooks/Auth/useCreateAccount';
import { useGithubAuth } from '../../hooks/Auth/useGithubAuth';
import { useMicrosoftAuth } from '../../hooks/Auth/useMicrosoftAuth';
import { useGoogleAuth } from '../../hooks/Auth/useGoogleAuth';
import { useFacebookAuth } from '../../hooks/Auth/useFacebookAuth'
import { usePasswordView } from '../../hooks/ViewPassword/usePasswordView';

const SignUpForm = () => {
  const { formData, handleData, handleSubmit } = useCreateAccount('http://localhost:3000/users');
  const { user, loading, loginWithGoogle, logout } = useGoogleAuth();
  const { userGit, loadingGit, loginWithGithub, logoutGit } = useGithubAuth();
  const { userMic, loadingMic, loginWithMicrosoft, logoutMic } = useMicrosoftAuth();
  const { userFace, loadingFace, loginWithFacebook, logoutFace } = useFacebookAuth();
  const { isPasswordVisible, toggleVisibility } = usePasswordView();
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
                loginWithGoogle()
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

              {loadingFace ? "..." : <i className="fa-brands fa-facebook-f"></i>}
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
          <div className="inputPassword">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              value={formData.password || ''}
              name="password"
              onChange={handleData}
              required
            />
            <button onClick={(e) => { e.preventDefault(); toggleVisibility(); }}>
              {isPasswordVisible ? (
                <i class="fa-solid fa-eye-slash"></i>
              ) : (
                <i class="fa-solid fa-eye"></i>
              )}
            </button>
          </div>
          <button type="submit" className="btn-submit">Sign Up</button>
        </form >
      </div >
    </>
  );
};

export default SignUpForm;
