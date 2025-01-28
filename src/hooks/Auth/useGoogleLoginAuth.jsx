import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from "react-toastify";

const useGoogleLoginAuth = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [acessToken, setAcessToken] = useState(null);

    //Function Auth Google
    const googleLogin = useGoogleLogin({
        onSuccess: (response) => {
            toast.success("Login realizado com sucesso!", {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                draggable: true,
                closeButton: false,
                pauseOnHover: false,
            });
            setIsAuthenticated(true);
            setAcessToken(response.access_token);
            console.log("Token de acesso de login Google", response.acess_token);
        },
        onError: () => {
            console.error("Erro durante o login com Google:", error);
            toast.error("Dados inválidos!", {
                position: 'top-center',
                hideProgressBar: false,
                autoClose: 3000,
                draggable: true,
                closeButton: false,
                pauseOnHover: false,
            });
        },
    });

    const logout= () => {
        setIsAuthenticated(false);
        setAcessToken(null);
        toast.info("Você saiu com sucesso", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            draggable: true,
            closeButton: false,
            pauseOnHover: false,
        });
        console.log("Usuário desconectado");
    }
  
    return {
        isAuthenticated,
        acessToken,
        googleLogin,
        logout,
    };
};

export default useGoogleLoginAuth;