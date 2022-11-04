import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
    function navBar() {
        return (
            <Navbar fixed="top" bg="light" variant="light">
                <Navbar.Brand href="/">Heaat</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>

                    <Nav.Link href="/shoes/nike">Nike</Nav.Link>

                    <Nav.Link href="/shoes/jordan">Jordan</Nav.Link>

                    <Nav.Link href="/shoes/yeezy">Yeezy</Nav.Link>

                    <Nav.Link href="/shoes/off-white">OFF WHITE</Nav.Link>

                    <Nav.Link href="/mens">{"Men's"}</Nav.Link>

                    <Nav.Link href="/womens">{"Women's"}</Nav.Link>

                    <NavDropdown title="Designer" id="Dropdown">
                        <NavDropdown.Item href="/shoes/balenciaga">
                            Balenciaga
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/shoes/prada">
                            Prada
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/shoes/gucci">
                            Gucci
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/shoes/dior">
                            Dior
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/shoes/chanel">
                            Chanel
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }

    return <nav className="NavBar navbar navbar-expand-md">{navBar()}</nav>;
}

export default NavBar;
