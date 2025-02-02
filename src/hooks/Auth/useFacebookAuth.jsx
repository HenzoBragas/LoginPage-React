import { useState } from 'react'
import { FacebookAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from "react-toastify";

export const useFacebookAuth = () => {

    const [userFace, setUserFace] = useState(null);
    const [loadingFace, setLoadingFace] = useState(false);

    const provider = new FacebookAuthProvider();

    const loginWithFacebook = async () => {
        setLoadingFace(true);

        try {
            const resul = await signInWithPopup(auth, provider);
            setUserFace(result.user);
            toast.success(`Bem vindo, ${user.displayName}!`, {
                position: "top-center",
                autoClose: 3000,
            });
        } catch (error) {
            console.log(error);
            toast.error("Erro ao fazer o login com Facebook!", {
                position: "top-center",
                autoClose: 3000,
            });
        } finally {
            setLoadingGit(false);
        }
    }

    const logoutFace = async () => {
        setLoadingFace(true);
        try {
            toast.info("Você saiu com sucesso", {
                position: "top-center",
                autoClose: 3000,
            });
        } catch (error) {
            console.log(error);
            toast.error("Erro ao fazer logout. Tente novamente.", {
                position: "top-center",
                autoClose: 3000,
            });
        } finally{
            setLoadingFace(false);
        }
    }
    return {
        userFace, loadingFace, loginWithFacebook, logoutFace
    };
};
