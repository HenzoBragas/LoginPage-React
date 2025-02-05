import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

export const useCreateAuth = () => {
    const [formAuth, setFormAuth] = useState({ name: "", email: "", password: "" });
    const [loadingCreate, setLoadingCreate] = useState(false);

    const handleChange = (e) => {
        setFormAuth({ ...formAuth, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoadingCreate(true);

        try {
            await register(formAuth.email, formAuth.password);
            toast.success("Conta criada com sucesso!",
                {
                    position: "top-center",
                    autoClose: 3000
                });
        } catch (error) {
            toast.error("Erro ao criar a conta!", {
                position: "top-center",
                autoClose: 3000
            });
        }

        setLoadingCreate(false);
    };

    const register = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Erro ao criar a conta: ", error.message);
            throw error;
        }
    };

    return { formAuth, handleChange, handleSubmit, loadingCreate };
};
