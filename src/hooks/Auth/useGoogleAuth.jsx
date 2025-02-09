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
      toast.success('Login successful', {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/home"); 
    } catch (error) {
      console.error(error);
      toast.error('Error logging in with Google', {
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

      localStorage.clear();
      sessionStorage.clear();

      toast.info('You have successfully logged out', {
        position: "top-center",
        autoClose: 3000,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error('Error logging out. Please try again.', {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    loginWithGoogle,
    logout,
  };
};
