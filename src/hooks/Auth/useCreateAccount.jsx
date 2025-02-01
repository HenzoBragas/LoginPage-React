import { useState } from 'react'
import { toast } from 'react-toastify';

export const useCreateAccount = (url) => {

    const [formData, setFormData] = useState({ name: '', email: '', password: '', });


    const handleData = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const createAccount = async () => {
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                toast.success("Conta criada com sucesso!", {
                    autoClose: 3000,
                    hideProgressBar: false,
                    draggable: true,
                    closeButton: false,
                    pauseOnHover: false,
                });
                setFormData({ name: "", email: "", password: "" });
            } else {
                const errorData = await res.json();
                toast.error(errorData.message || "Dados inválidos!", {
                    position: 'top-center',
                    hideProgressBar: false,
                    autoClose: 3000,
                    draggable: true,
                    closeButton: false,
                    pauseOnHover: false,
                });
            }
        } catch (error) {
            console.error("Erro ao criar conta:", error);
            toast.error("Não foi possível criar a conta. Tente novamente mais tarde.", {
                position: 'top-center',
                hideProgressBar: false,
                autoClose: 3000,
                draggable: true,
                closeButton: false,
                pauseOnHover: false,
            });
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: formData.name,
            email: formData.email,
            password: formData.password
        };
        createAccount(newUser);
    };

    return {
        formData,
        setFormData,
        handleData,
        handleSubmit,
    };

}