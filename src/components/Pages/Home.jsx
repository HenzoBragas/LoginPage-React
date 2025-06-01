import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAuth, deleteUser } from "firebase/auth";

function Success() {
    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const logout = async () => {
        if (!user) {
            toast.error("Nenhum usuário autenticado.");
            return;
        }

        setLoading(true);
        try {
            await deleteUser(user); 
            localStorage.clear();
            sessionStorage.clear();

            toast.success("Você saiu com sucesso!", {
                position: "top-center",
                autoClose: 3000,
            });

            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            console.error(error);

            if (error.code === "auth/requires-recent-login") {
                toast.error("Reautentique para excluir a conta.", {
                    position: "top-center",
                    autoClose: 4000,
                });
            } else {
                toast.error("Erro ao sair. Tente novamente.", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="home">Home</h1>
            <div className="btn-home">
                <button
                    className="btn-submit"
                    onClick={(e) => {
                        e.preventDefault();
                        logout();
                    }}
                    disabled={loading}
                >
                    {loading ? "Saindo..." : "Logout"}
                </button>
            </div>
        </div>
    );
}

export default Success;
