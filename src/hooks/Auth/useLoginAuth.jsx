
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

export const useLoginAuth = (apiUrl) => {
    const [userData, setUserData] = useState([]);
    const [formAuth, setFormAuth] = useState({ email: "", password: "" });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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
            user.email === formAuth.email && user.password === formAuth.password );
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
        if (!apiUrl) return;

        async function getData() {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setUserData(data);
            } catch (error) {
                console.error("Erro ao buscar os dados", error);
            }
        }
        getData();
    }, [apiUrl]);

    return {
        formAuth,
        handleAuth,
        handleSubmit,
    }
}
