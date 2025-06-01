import { useState } from "react";
import { useUpdatePassword } from "../../hooks/Auth/useUpdatePassword";
import { toast } from "react-toastify";

const ChangePasswordPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const { resetPassword, loading } = useUpdatePassword();

    const [formData, setFormData] = useState({
        email: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!formData.email) {
            toast.error("Por favor coloque seu email", {
                position: "top-center",
                autoClose: 3000,
            })
            return;
        }

        try {
            await resetPassword(formData.email);
            setTimeout(() => {
                onClose();
            }, 2000)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="overlay">
            <div className="modal">
                <div className="container-pop">
                    <div className="container-title">
                        <h2>Esqueceu sua senha</h2>
                    </div>
                    <div className="form-pop">
                        <form onSubmit={handleSubmit}>
                            <div className="inputSocial">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="btn-password">
                                <button type="button" className="btn-pop" onClick={onClose} disabled={loading}>Cancelar</button>
                                <button type="submit" className="btn-pop btn-next" disabled={loading}>Confirmar </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPopup;
