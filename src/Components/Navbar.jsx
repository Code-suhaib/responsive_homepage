
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap";
function MyNavbar(){
    return (
        <>
            <Navbar bg="warning"  expand="lg"    >
                <Container>
                    <Navbar.Brand href="/"><i>COFFEE HUB</i></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-dark">
                            <Nav.Link  as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>        
    )
}
export default MyNavbar