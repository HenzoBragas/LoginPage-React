import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from "react-toastify";

const useGoogleLoginAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState(null);

    // Função de autenticação com o Google
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
            setAccessToken(response.access_token); // Corrigido para 'access_token'
            console.log("Token de acesso de login Google", response.access_token); // Corrigido para 'access_token'
        },
        onError: () => {
            console.error("Erro durante o login com Google.");
            toast.error("Dados inválidos ou erro na autenticação!", {
                position: 'top-center',
                hideProgressBar: false,
                autoClose: 3000,
                draggable: true,
                closeButton: false,
                pauseOnHover: false,
            });
        },
    });

    // Função de logout
    const logout = () => {
        setIsAuthenticated(false);
        setAccessToken(null);
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
        accessToken, // Corrigido para 'accessToken'
        googleLogin,
        logout,
    };
};

export default useGoogleLoginAuth;
