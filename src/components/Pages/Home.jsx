
import { useEffect, useState } from 'react'
function Success() {

    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("userName");
        if(storedName) {
            setUserName(storedName);
        }
    }, []);

    return (
        <div>
            <h1 className="home"> Home</h1>
            <h1>Welcome, {userName ? userName : "User"}!</h1>
            <button className='btn-submit'>Logout</button>
        </div>
    );
};

export default Success
