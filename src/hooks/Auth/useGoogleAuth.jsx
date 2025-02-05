// useGoogleAccount.jsx
import { useState, useEffect } from 'react';
import { firebaseApp, getAuth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { toast } from 'react-toastify';

export const useGoogleAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(firebaseApp);
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      toast.success(`Bem-vindo, ${result.user.displayName}!`, {
        position: "top-center",
        autoClose: 3000,
      }
      );
    } catch (error) {
      toast.error("Erro ao fazer login com Google. Tente novamente.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(getAuth(firebaseApp));
      setUser(null);
      toast.info("Você saiu com sucesso.");
    } catch (error) {
      toast.error("Erro ao fazer logout. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    loginWithGoogle,
    logout,
  };
};

  
