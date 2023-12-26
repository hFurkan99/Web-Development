import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className='mainNav'>
            <Link to="/">Home</Link>
            <Link to="/aboutUs">About</Link>
            <NavLink to="/info">Info</NavLink>
            <NavLink to="/userAcount">My Acount</NavLink>
            <NavLink to="/history">History</NavLink>
        </nav>
    )
}

export default Navbar