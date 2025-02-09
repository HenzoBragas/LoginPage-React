import { useState } from 'react'
import { auth, microsoftProvider, signInWithPopup } from '../../firebase';
import { toast } from 'react-toastify';

export const useMicrosoftAuth = () => {
    const [loadingMic, setLoadingMic] = useState(false);

    const loginWithMicrosoft = async () => {
        setLoadingMic(true);

        try {
            await signInWithPopup(auth, microsoftProvider);
            toast.success(`Login sucessful`, {
                position: "top-center",
                autoClose: 3000,
                closeButton: true,
            });
        } catch (error) {
            console.error(error);
            toast.error(`Error logging in with Microsoft!`, {
                position: "top-center",
                autoClose: 3000,
                closeButton: true,
            });
        } finally {
            setLoadingMic(false);
        }
    };

    const logoutMic = async () => {
        try {
            await auth.signOut();
            toast.info("You have successfully exited", {
                position: "top-center",
                autoClose: 3000,
            });
        } catch (error) {
            console.log(error);
            toast.error("Error logging out. Please try again.", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return {
        loadingMic,
        loginWithMicrosoft,
        logoutMic,
    }
}
