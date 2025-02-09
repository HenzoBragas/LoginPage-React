import { useState } from "react";
import { getAuth, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useUpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  // Função para enviar o e-mail de redefinição de senha
  const resetPassword = async (email) => {
    setLoading(true);
    try {
      const actionCodeSettings = {
        url: "http://localhost:5173/reset-password",
        handleCodeInApp: true,
      };

      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      toast.success("An email has been sent to reset your password", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Error sending password reset email. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Função para confirmar a redefinição de senha
  const confirmResetPassword = async (oobCode, newPassword) => {
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      toast.success("Senha redefinida com sucesso!", {
        position: "top-center",
        autoClose: 3000,
      });

      // Redireciona o usuário após 2 segundos
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao redefinir a senha. Código inválido ou expirado.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return { resetPassword, confirmResetPassword, loading };
};
