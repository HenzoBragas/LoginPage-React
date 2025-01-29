import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const useGoogleAuth = (apiUrl) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

  // Carregar o script do Google
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log('Google script loaded');
      setIsGoogleLoaded(true);
    };
    script.onerror = () => {
      console.error('Failed to load Google script');
    };
    document.body.appendChild(script);
  }, []);

  // Função para lidar com a resposta do Google
  const handleCredentialResponse = async (response) => {
    try {
      setIsLoading(true);
      const { credential } = response;

      const userInfo = JSON.parse(atob(credential.split('.')[1]));
      const userData = {
        name: userInfo.name,
        email: userInfo.email,
        googleId: userInfo.sub,
      };

      const existingUser = await fetch(`${apiUrl}/users?email=${userData.email}`);
      const existingData = await existingUser.json();

      if (existingData.length > 0) {
        toast.info('Usuário já cadastrado!', { position: 'top-center', autoClose: 3000 });
        return;
      }

      const res = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        toast.success('Conta criada com sucesso!', { position: 'top-center', autoClose: 3000 });
      } else {
        toast.error('Erro ao criar conta!', { position: 'top-center', autoClose: 3000 });
      }
    } catch (error) {
      console.error('Erro ao autenticar com Google:', error);
      toast.error('Erro ao criar conta. Tente novamente mais tarde.', { position: 'top-center', autoClose: 3000 });
    } finally {
      setIsLoading(false);
    }
  };

  // Função para iniciar o login do Google
  const googleLogin = () => {
    if (window.google) {
      window.google.accounts.id.prompt();
    } else {
      toast.error('Erro ao carregar Google Login. Recarregue a página.', { position: 'top-center', autoClose: 3000 });
    }
  };

  // Inicializar o login com o Google
  const initializeGoogleLogin = (clientId) => {
    if (!isGoogleLoaded || !window.google) return;

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
    });
  };

  return { googleLogin, initializeGoogleLogin, isLoading };
};
