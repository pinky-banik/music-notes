import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import "./header.css";

const header = () => {
    return (
        <div className="header">
                <div className="navbar" id="home">
                <Navbar className ="color-nav mb-5 fixed-top"  collapseOnSelect expand="lg"  variant="dark">
                <Container>
                <Navbar.Brand href="/home">Music Notes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Sevices" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/service">Guiter</NavDropdown.Item>
                        <NavDropdown.Item href="/service">Piano</NavDropdown.Item>
                        <NavDropdown.Item href="/service">violin</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/service">More</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            
                </div>
        </div>
    );
};

export default header;