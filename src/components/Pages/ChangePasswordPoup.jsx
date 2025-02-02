import { useState } from "react";
import { usePasswordView } from "../../hooks/ViewPassword/usePasswordView";
import { toast } from "react-toastify";

const ChangePasswordPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const { isPasswordVisible, toggleVisibility } = usePasswordView();

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const nextStep = (e) => {
        e.preventDefault(); // Previne o envio do formulário
        if (!formData.email) {
            toast.info("Por favor insira seu email!", {
                position: "top-center",
                autoClose: 3000,
            })
            return;
        }
        setStep((prev) => prev + 1); // Avança para o próximo passo
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password === formData.confirmPassword) {
            toast.success("Senha trocada com sucesso! ", {
                position: "top-center",
                autoClose: 3000,
            });
            console.log(formData);
            onClose();
        }
        else {
            toast.error("As senhas devem ser iguais!", {
                position: "top-center",
                autoClose: 3000,
            })
        }
    };

    return (
        <div className="overlay">
            <div className="modal">
                <div className="container-pop">
                    <div className="container-title">
                        <h2>Change password</h2>
                    </div>
                    <div className="form-pop">
                        {step === 1 && (
                            <form onSubmit={nextStep}>
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
                                    <button type="button" className="btn-pop" onClick={onClose}>Cancel</button>
                                    <button type="submit" className="btn-pop btn-next">Next</button>
                                </div>
                            </form>
                        )}

                        {step === 2 && (
                            <div className="form-pop">
                                <form onSubmit={handleSubmit}>
                                    <div className="inputView">
                                        <input
                                            type={isPasswordVisible ? "text" : "password"}
                                            name="password"
                                            placeholder="New password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={(e) => { e.preventDefault(); toggleVisibility(); }}
                                        >
                                            {isPasswordVisible ? (
                                                <i className="fa-solid fa-eye-slash"></i>
                                            ) : (
                                                <i className="fa-solid fa-eye"></i>
                                            )}
                                        </button>

                                        <input
                                            type={isPasswordVisible ? "text" : "password"}
                                            name="confirmPassword"
                                            placeholder="Confirm password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="btn-password">
                                        <button className="btn-pop" type="button" onClick={onClose}>
                                            Cancel
                                        </button>
                                        <button className="btn-pop" type="submit">
                                            Confirm
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPopup;
