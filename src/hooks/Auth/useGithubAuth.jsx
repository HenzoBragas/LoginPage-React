import { useState } from "react";
import { auth, GithubAuthProvider, signInWithPopup } from "../../firebase";
import { toast } from 'react-toastify';

export const useGithubAuth = () => {

    const [userGit, setUserGit] = useState(null);
    const [loadingGit, setLoadingGit] = useState(false);

    const loginWithGithub = async () => {
        setLoadingGit(true);
        const provider = new GithubAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setUserGit(user);
            toast.success(`Bem vindo, ${user.displayName}!`, {
                position: "top-center",
                autoClose: 3000,
            });
        } catch (error) {
            console.log(error);
            toast.error("Erro ao fazer o login com GitHub!", {
                position: "top-center",
                autoClose: 3000,
            });
        } finally {
            setLoadingGit(false);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
            setUserGit(null);
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
        }
    };

    return {
        userGit,
        loadingGit,
        loginWithGithub,
        logout,
    }
}

export default useGithubAuth;