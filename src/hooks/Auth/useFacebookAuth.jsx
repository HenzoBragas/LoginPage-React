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
            toast.success(`Login efetuado com sucesso com Facebook `, {
                position: "top-center",
                autoClose: 2000,
                closeButton: true
            });
            navigate("/home");
        } catch (error) {
            toast.error("Erro ao efetuar login com Facebook", {
                position: "top-center",
                autoClose: 3000,
                closeButton: true
            });
            
        }finally{
            setLoadingFace(false);
        } 
        
    }
    return {
        userFace, loadingFace, loginWithFacebook
    };
};
