import React, {useState, useEffect} from "react";

const SignInForm = () => {

  const [formAuth, setFormAuth] = useState({
    email: '',
    password: ''
  });

  const [userData, setUserData] = useState([]);
  const [loginError, setLoginError] = useState(false);
  const url = "http://localhost:3000/users";

  const handleAuth = (e) => {
    const  { name, value} = e.target;
    setFormAuth({
      ...formAuth,
      [name]: value
    });
    console.log(formAuth);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = userData.find(user => 
      user.email === formAuth.email && user.password === formAuth.password
    );
    if(user) {
      console.log("Login Sucesso");
      alert("Logado com sucesso");
      setLoginError(false);
    
    } else {
      console.error("Credenciais inválidas");
      alert("Credencias inválidas");
      setLoginError(true);
    
    }
    setFormAuth("");
  };
  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setUserData(data);
    }
    getData();
  }, []);

  return(
  <div className="form-container sign-in">
    <form onSubmit={handleSubmit}>
      <h1 className="SignIn">Sign In</h1>
      <div className="social-icons">
        <a href="#" className="icon">
          <i className="fa-brands fa-google-plus-g"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <span>or use your email password</span>
      <input 
      type="email" 
      placeholder="Email" 
      name="email"
      onChange={handleAuth}
      value={formAuth.email || ''}/>

      <input 
      type="password" 
      name="password"
      placeholder="Password"
      onChange={handleAuth}
      value={formAuth.password || ''} />
      <a href="#">Forget Your Password?</a>
      <button type="submit">Sign In</button>
    </form>
  </div>
  )
};

export default SignInForm;
