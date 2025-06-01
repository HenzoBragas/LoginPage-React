import { useState } from "react";
import { auth, GithubAuthProvider, signInWithPopup } from "../../firebase";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const useGithubAuth = () => {

    const [userGit, setUserGit] = useState(null);
    const [loadingGit, setLoadingGit] = useState(false);
    const navigate = useNavigate();

    const loginWithGithub = async () => {
        setLoadingGit(true);
        const provider = new GithubAuthProvider();

        try {
           await signInWithPopup(auth, provider);
            setUserGit(user);
            toast.success(`Login efetuado com sucesso`, {
                position: "top-center",
                autoClose: 3000,
                closeButton: true
            });

            navigate("/home");

        } catch (error) {
            console.log(error);
            toast.error("Erro ao efetuar o login com Github!", {
                position: "top-center",
                autoClose: 3000,
                closeButton: true
            });
        } finally {
            setLoadingGit(false);
        }
    };
    return {
        userGit,
        loadingGit,
        loginWithGithub,
    }
}
