import { useState } from "react";
import { usePasswordView } from "../../hooks/ViewPassword/usePasswordView";
import { useUpdatePassword } from "../../hooks/Auth/useUpdatePassword";
import { toast } from "react-toastify";
import { useSearchParams, useNavigate } from "react-router-dom";

function ResetPassword() {
    const { confirmResetPassword, loading } = useUpdatePassword();
    const { isPasswordVisible, toggleVisibility } = usePasswordView();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("As senhas devem ser iguais!", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        const oobCode = searchParams.get("oobCode");
        if (!oobCode) {
            toast.error("Código inválido!", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        try {
            await confirmResetPassword(oobCode, password);
            toast.success("Senha redefinida com sucesso!", {
                position: "top-center",
                autoClose: 3000,
            });

            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            toast.error("Erro ao redefinir a senha. Tente novamente!", {
                position: "top-center",
                autoClose: 3000,
            });
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
                        <form onSubmit={handleResetPassword}>
                            <div className="inputView">
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    name="password"
                                    placeholder="New password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="btn-password">
                                <button className="btn-pop" type="button" onClick={() => navigate("/")}>
                                    Cancel
                                </button>
                                <button className="btn-pop" type="submit" disabled={loading}>
                                    {loading ? "Alterando..." : "Confirmar"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
