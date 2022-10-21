import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from './UserContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar ({ logout }){
    const { currentUser } = useContext(UserContext);
    console.debug('Navigation', 'currentUser=', currentUser);

    function loggedInNav(){
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href='/'>HEAAT</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href='/'>
                    Home
                </Nav.Link>
                <Nav.Link href="/shoes/nike">
                    Nike
                </Nav.Link>
                <Nav.Link href='/shoes/jordan'>
                    Jordan
                </Nav.Link>
                <Nav.Link href='/shoes/yeezy'>
                    Yeezy
                </Nav.Link>
                <Nav.Link href='/mens'>
                    Men's
                </Nav.Link>
                <Nav.Link href='/womens'>
                    Women's
                </Nav.Link>
                <Nav.Link href='/profile'>
                    Profile
                </Nav.Link>
                <Nav.Link href='/' onClick={logout}>
                        Log out {currentUser.first_name || currentUser.username}
                    </Nav.Link>
                    </Nav>
            </Navbar>
        );
    }

    function loggedOutNav(){
        return (
            <Navbar fixed='top' bg="light" variant="light">
                <Navbar.Brand href='/'>Heaat</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href='/'>
                    Home
                </Nav.Link>
                <Nav.Link href='/shoes/nike'>
                    Nike
                </Nav.Link>
                <Nav.Link href='/shoes/jordan'>
                    Jordan
                </Nav.Link>
                <Nav.Link href='/shoes/yeezy'>
                    Yeezy
                </Nav.Link>
                <Nav.Link href='/shoes/off-white'>
                    OFF WHITE
                </Nav.Link>
                <Nav.Link href='/mens'>
                    Men's
                </Nav.Link>
                <Nav.Link href='/womens'>
                    Women's
                </Nav.Link>
                <NavDropdown title="Designer" id="Dropdown">
                    <NavDropdown.Item href='/shoes/balenciaga'>Balenciaga</NavDropdown.Item>
                    <NavDropdown.Item href='/shoes/prada'>Prada</NavDropdown.Item>
                    <NavDropdown.Item href='/shoes/gucci'>Gucci</NavDropdown.Item>
                    <NavDropdown.Item href='/shoes/dior'>Dior</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='/signup'>
                    Sign Up
                </Nav.Link>
                <Nav.Link href='/login'>
                    Log In
                </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
    return (
        <nav className = 'NavBar navbar navbar-expand-md'>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    );
}

export default NavBar;
