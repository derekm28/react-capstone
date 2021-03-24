import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from './UserContext';

function Navbar ({ logout }){
    const currentUser = useContext(UserContext);
    console.debug('Navigation', 'currentUser=', currentUser);

    function loggedInNav(){
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
                <NavLink exact to = '/profile'>
                    Profile
                </NavLink>
                <Link className='nav-link' to='/' onClick={logout}>
                        Log out {currentUser.first_name || currentUser.username}
                    </Link>
            </nav>
        );
    }

    function loggedOutNav(){
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
                <NavLink exact to = '/signup'>
                    Sign Up
                </NavLink>
                <NavLink exact to = '/login'>
                    Log In
                </NavLink>
            </nav>
        );
    }
    return (
        <nav className = 'NavBar navbar navbar-expand-md'>
            <Link className = 'navbar-brand' to = '/'>
                Name of App
            </Link>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    );

}

export default Navbar;
