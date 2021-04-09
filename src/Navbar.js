import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from './UserContext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavBar ({ logout }){
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);

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
                <NavLink exact to = '/yeezy'>
                    Yeezy
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
                <NavLink exact to = '/yeezy'>
                    Yeezy
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
                Heat
            </Link>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    );

//     return (
//         <Navbar bg="light" variant="light">
//     <Navbar.Brand href="/">Name of App</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link exact to ="/">Home</Nav.Link>
//       <Nav.Link href="#nike">Nike</Nav.Link>
//       <Nav.Link href="#jordan">Jordan</Nav.Link>
//       <Nav.Link href="/yeezy">Yeezy</Nav.Link>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-primary">Search</Button>
//     </Form>
//   </Navbar>
//     );
}





export default NavBar;
