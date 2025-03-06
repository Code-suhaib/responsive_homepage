import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Testinomials.css";

const testimonialsData = [
  {
    name: "John Doe",
    review: "Amazing coffee! The best experience I’ve had so far.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Jane Smith",
    review: "The flavors are absolutely fantastic. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Michael Johnson",
    review: "Great service and the coffee tastes incredible!",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

function Testimonials() {
  return (
    <Container className="my-5 text-center testimonials-section ">
      <h2>What Our Customers Say</h2>
      <Row className="justify-content-center">
        {testimonialsData.map((testimonial, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card className="p-3 testimonial-card">
              <Card.Img variant="top" src={testimonial.image} className="rounded-circle mx-auto" style={{ width: "80px", height: "80px" }} />
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>"{testimonial.review}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;
