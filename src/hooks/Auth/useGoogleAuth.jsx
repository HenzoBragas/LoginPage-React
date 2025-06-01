import { useState } from 'react';
import { firebaseApp, getAuth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const useGoogleAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(getAuth(firebaseApp), provider); 
      toast.success('Login efetuado com sucesso', {
        position: "top-center",
        autoClose: 3000,
        closeButton: true
      });
      navigate("/home"); 
    } catch (error) {
      console.error(error);
      toast.error('Erro ao realizar login com Google', {
        position: "top-center",
        autoClose: 3000
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    loginWithGoogle,
  };
};
