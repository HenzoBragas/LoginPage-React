import React from 'react'
import useGoogleLoginAuth from '../../hooks/Auth/useGoogleLoginAuth'
function Success() {

    const { isAuthenticated, googleLogin, logout, acessToken } = useGoogleLoginAuth();

    return (
        <div>
            <h1> Login realizado com sucesso </h1>
            {!isAuthenticated ? (
                <button onClick={googleLogin}>login com Google</button>
            ) : (
                <div>
                    <p>Usuário autenticado!</p>
                    <p>Token de acesso: {acessToken}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default Success
