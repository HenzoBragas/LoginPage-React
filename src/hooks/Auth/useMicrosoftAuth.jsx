import { useState } from 'react'
import { auth, microsoftProvider, signInWithPopup } from '../../firebase';
import { toast } from 'react-toastify';

export const useMicrosoftAuth = () => {
    const [loadingMic, setLoadingMic] = useState(false);

    const loginWithMicrosoft = async () => {
        setLoadingMic(true);

        try {
            await signInWithPopup(auth, microsoftProvider);
            toast.success(`Login efetuado com sucesso`, {
                position: "top-center",
                autoClose: 2000,
                closeButton: true
            });
        } catch (error) {
            console.error(error);
            toast.error(`Erro ao efetuar login com Microsoft!`, {
                position: "top-center",
                autoClose: 2000,
                closeButton: true
            });
        } finally {
            setLoadingMic(false);
        }
    };

    return {
        loadingMic,
        loginWithMicrosoft,
    }
}
