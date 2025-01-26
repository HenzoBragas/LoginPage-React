import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm = () => {

  const url = "http://localhost:3000/users";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleChangeSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser),
    });

    if (!res.ok) {
      toast.success("Conta criada com sucesso!", {
        autoClose: 3000,
        hideProgressBar: false,
        draggable: true,
        closeButton: false,
        pauseOnHover: false,
      });
      setFormData(""); // Limpa o formulário após o envio
    } else {
      toast.error("Dados inválidos!", {
        position: 'top-center',
        hideProgressBar: false,
        autoClose: 3000,
        draggable: true,
        closeButton: false,
        pauseOnHover: false,
      });
      setFormData("");
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="form-container sign-up">

        <form onSubmit={handleChangeSubmit}>
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
