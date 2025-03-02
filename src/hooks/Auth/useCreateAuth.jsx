import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useCreateAuth = () => {
    const [formAuth, setFormAuth] = useState({ name: "", email: "", password: "" });
    const [loadingCreate, setLoadingCreate] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormAuth({ ...formAuth, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoadingCreate(true);

        try {
            await register(formAuth.email, formAuth.password);
            toast.success("Account created successfully!",
                {
                    position: "top-center",
                    autoClose: 3000
                });

            setFormAuth({ name: "", email: "", password: "" });

            98
        } catch (error) {
            toast.error("Error creating account!", {
                position: "top-center",
                autoClose: 3000
            });
        }

        setLoadingCreate(false);

    };

    const register = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    };

    return { formAuth, handleChange, handleSubmit, loadingCreate };
};
