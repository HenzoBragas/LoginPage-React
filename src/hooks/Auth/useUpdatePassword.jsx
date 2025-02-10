
import { getAuth, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useUpdatePassword = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const resetPassword = async (email) => {
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
    }
  };

  const confirmResetPassword = async (oobCode, newPassword) => {
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);

      toast.success("Password reset successfully", {
        position: "top-center",
        autoClose: 3000,
      });

      await new Promise(resolve => setTimeout(resolve, 3000));
      navigate("/");

    } catch (error) {
      console.error(error);
      toast.error("Error resetting password. Invalid or expired code.", {
        position: "top-center",
        autoClose: 3000,
      });
    }

  };

  return { resetPassword, confirmResetPassword };
};
