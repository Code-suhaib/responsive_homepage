import React from "react";
import "./home.css";
import { Container, Button } from "react-bootstrap";
import Testimonials from "./Testinomial";


function Home() {
    return (
        <>
       
        <div className="hero-section">
            <Container>
                <h1 className="text-light">Welcome to Coffee World</h1>
                <p className="text-light">Discover amazing coffee taste from around the world</p>
                <Button variant="light" size="lg">Get Started</Button>
            </Container>
        </div>
        <Testimonials/>
        </>
    );
}

export default Home;
