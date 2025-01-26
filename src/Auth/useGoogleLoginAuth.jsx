import { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from "react-toastify";

const useGoogleLoginAuth = (apiUrl) => {
    const [userData, setUserData] = useState([]);
    const [formAuth, setFormAuth] = useState({ email:"", password: ""});
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    //Function Auth Google
    const googleLogin = useGoogleLogin({
        onSuccess: (response) => {
            toast.success("Login realizado com sucesso!", {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                draggable: true,
                closeButton: false,
                pauseOnHover: false,
            });
            setIsAuthenticated(true);
            console.log("Token de acesso de login Google", response);
        },
        onError: () => {
            toast.error("Dados inválidos!", {
                position: 'top-center',
                hideProgressBar: false,
                autoClose: 3000,
                draggable: true,
                closeButton: false,
                pauseOnHover: false,
            });
        },
    });
    // Function Auth email and password

    const handleAuth = (e) => {
        const { name, value } = e.target;
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
        if (user) {
            toast.success("Login realizado com sucesso!", {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                draggable: true,
                closeButton: false,
                pauseOnHover: false,
            });
            setIsAuthenticated(true);

        } else {
            toast.error("Dados inválidos!", {
                position: 'top-center',
                hideProgressBar: false,
                autoClose: 3000,
                draggable: true,
                closeButton: false,
                pauseOnHover: false,
            });
        }
        setFormAuth("");
    };
    useEffect(() => {
        async function getData() {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setUserData(data);
        }
        getData();
    }, [apiUrl]);

    return {
        formAuth,
        isAuthenticated,
        googleLogin,
        handleAuth,
        handleSubmit,
    };
};

export default useGoogleLoginAuth;