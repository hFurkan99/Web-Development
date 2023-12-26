import React from 'react'
import { useNavigate } from "react-router-dom";
function Mission() {

    const navigate = useNavigate();
    return (
        <>
            <div>Mission</div>
            <button onClick={() => navigate("/")}>Back to Home Page</button>
        </>

    )
}

export default Mission