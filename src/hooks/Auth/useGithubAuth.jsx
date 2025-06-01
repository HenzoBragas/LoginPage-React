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
            toast.success(`Login sucessful `, {
                position: "top-center",
                autoClose: 3000,
                closeButton: true
            });

            navigate("/home");

        } catch (error) {
            console.log(error);
            toast.error("Error logging in with GitHub!", {
                position: "top-center",
                autoClose: 3000,
                closeButton: true
            });
        } finally {
            setLoadingGit(false);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
            setUserGit(null);
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
        userGit,
        loadingGit,
        loginWithGithub,
        logout,
    }
}
