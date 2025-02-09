import { useState } from 'react'
import { FacebookAuthProvider,  signInWithPopup,} from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export const useFacebookAuth = () => {

    const [userFace, setUserFace] = useState(null);
    const [loadingFace, setLoadingFace] = useState(false);

    const navigate = useNavigate();

    const provider = new FacebookAuthProvider();

    const loginWithFacebook = async () => {
        setLoadingFace(true);

        try {
            await signInWithPopup(auth, provider);
            toast.success(`Login sucessful `, {
                position: "top-center",
                autoClose: 3000,
                closeButton: true,
            });
            navigate("/home");
        } catch (error) {
            toast.error("Error loggin in with Facebook", {
                position: "top-center",
                autoClose: 3000,
                closeButton: true,
            });
            
        }finally{
            setLoadingFace(false);
        } 
        
    }

    const logoutFace = async () => {
        setLoadingFace(true);
        try {
            toast.info("You have successfully exited", {
                position: "top-center",
                autoClose: 3000,
            });
            navigate("/")
        } catch (error) {
            console.log(error);
            toast.error("Error logging out. Please try again.", {
                position: "top-center",
                autoClose: 3000,
            });
        } finally {
            setLoadingFace(false);
        }
    }
    return {
        userFace, loadingFace, loginWithFacebook, logoutFace
    };
};
