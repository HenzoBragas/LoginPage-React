import { useState } from 'react'

export const usePasswordView = () => {

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const toggleVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };
    return {
        isPasswordVisible,
        toggleVisibility,

    }
};
