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
                <div className="navbar">
                <Navbar className ="color-nav mb-5 fixed-top"  collapseOnSelect expand="lg"  variant="dark">
                <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown title="Sevices" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            
                </div>
        </div>
    );
};

export default header;