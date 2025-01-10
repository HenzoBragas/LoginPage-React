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
        limit: 2,
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
        limit: 2,
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
