import { usePasswordView } from "../../hooks/password/usePasswordView"; 

const ChangePasswordPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const {isPasswordVisible, toggleVisibility } = usePasswordView();

    return (
        <div className="overlay">
            <div className="modal">
                <div className="container-pop">
                    <div className="container-title">
                        <h2>Change password</h2>
                    </div>
                    <div className="form-pop">
                        <form >
                            <input type={isPasswordVisible ? "text" : "password"} placeholder="New password" />
                            <button onClick={(e) => { e.preventDefault(); toggleVisibility();}}>
                                {isPasswordVisible ? (
                                    <i class="fa-solid fa-eye-slash"></i>
                                ): (
                                    <i class="fa-solid fa-eye"></i>
                                )} 
                            </button>
                            <input type="password" placeholder="Confirm password" />
                            <div className="btn-password">
                                <button className="btn-pop" onClick={onClose}>Cancel</button>
                                <button className="btn-pop">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ChangePasswordPopup;