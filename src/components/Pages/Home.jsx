import { useState } from "react";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";

function Success() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    const logout = async () => {
        setLoading(true);
        try {
            toast.success("You have successfully exited", {
                position: "top-center",
                autoClose: 3000,
            });
            setTimeout(() => {
                navigate("/");
            }, 4000)
        } catch (error) {
            console.log(error);
            toast.error("Error logging out. Please try again.", {
                position: "top-center",
                autoClose: 3000,
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1 className="home"> Home</h1>
            <div className="btn-home">
                <button className='btn-submit' onClick={(e) => {
                    e.preventDefault();
                    logout();
                }}>Logout</button>
            </div>
        </div>
    );
};

export default Success
