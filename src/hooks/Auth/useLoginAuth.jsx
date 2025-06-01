import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const useLoginAuth = () => {
    const [formAuth, setFormAuth] = useState({ email: "", password: "" });
    const [loadingLogin, setLoadingLogin] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormAuth({ ...formAuth, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoadingLogin(true);

        try {
            await login(formAuth.email, formAuth.password);
            toast.success(" Login successful", {
                position: "top-center",
                autoClose:  2000,
                closeButton: true
            });

            navigate("/home");
        } catch (error) {
            toast.error("Error logging in", {
                position: "top-center",
                autoClose: 2000,
                closeButton: true
            });
        }

        setLoadingLogin(false);
   
    };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Erro ao logar: ", error.message);
            throw error;
        }
    };

    return { formAuth, handleChange, handleSubmit, loadingLogin };
};
