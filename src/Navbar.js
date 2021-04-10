import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from './UserContext';

function NavBar ({ logout }){
    const currentUser = useContext(UserContext);
    console.debug('Navigation', 'currentUser=', currentUser);

    function loggedInNav(){
        return (
            <nav className = "Navbar">
                <NavLink to = '/'>
                    Home
                </NavLink>
                <NavLink to = '/nike'>
                    Nike
                </NavLink>
                <NavLink to = '/jordan'>
                    Jordan
                </NavLink>
                <NavLink to = '/yeezy'>
                    Yeezy
                </NavLink>
                <NavLink to = '/profile'>
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
                <NavLink to = '/'>
                    Home
                </NavLink>
                <NavLink to = '/nike'>
                    Nike
                </NavLink>
                <NavLink to = '/jordan'>
                    Jordan
                </NavLink>
                <NavLink to = '/yeezy'>
                    Yeezy
                </NavLink>
                <NavLink to = '/signup'>
                    Sign Up
                </NavLink>
                <NavLink to = '/login'>
                    Log In
                </NavLink>
            </nav>
        );
    }
    return (
        <nav className = 'NavBar navbar navbar-expand-md'>
            <Link className = 'navbar-brand' to = '/'>
                Heat
            </Link>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    );
}

export default NavBar;
