import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar (){
    return (
        <nav className = "Navbar">
            <NavLink exact to = '/'>
                Home
            </NavLink>
            <NavLink exact to = '/nike'>
                Nike
            </NavLink>
            <NavLink exact to = '/jordan'>
                Jordan
            </NavLink>
            <NavLink exact to = '/adidas'>
                Adidas
            </NavLink>
        </nav>
    );
}

export default Navbar;
