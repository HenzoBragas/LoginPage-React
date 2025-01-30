import { useState } from 'react'
import { auth,  microsoftProvider, signInWithPopup } from '../../firebase';
import { toast } from 'react-toastify';

export const useMicrosoftAuth = () => {
    const [userMic, setUserMic] = useState(null);
    const [loadingMic, setLoadingMic] = useState(false);

    const loginWithMicrosoft = async () => {
        setLoadingMic(true);

        try {
            const result = await signInWithPopup(auth, microsoftProvider);
            const user = result.user;
            setUserMic(user);
            toast.success(`Bem vindo, ${user.displayName}`, {
                position: "top-center",
                autoClose: 3000,
            });
        } catch (error) {
            console.error("Erro ao fazer o login com Microsoft!");
            toast.error(`Erro ao fazer o login com a Microsoft!`, {
                position: "top-center",
                autoClose: 3000,
            });
        } finally {
            setLoadingMic(false);
        }
    };

    const logoutMic = async () => {
        try {
            await auth.signOut();
            setUserMic(null);
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
        userMic,
        loadingMic,
        loginWithMicrosoft,
        logoutMic,
    }
}
