import React from "react";
import "./Card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CoffeeCard() {
  const coffeeList = [
    { name: "Cappuccino", image: "/Cappuccino.jpg", description: "A blend of espresso, steamed milk, and frothy foam." },
    { name: "Espresso", image: "/Espresso.jpg", description: "Strong and rich coffee with no milk." },
    { name: "Latte", image: "/Latte.jpg", description: "Smooth espresso with steamed milk and a light foam topping." },
    { name: "Mocha", image: "/Mocha.jpg", description: "A delicious mix of espresso, chocolate, and steamed milk." },
    
  ];

  return (
    <div className="coffee-container">
      {coffeeList.map((coffee, index) => (
        <Card  className="coffee-card"    key={index} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={coffee.image} alt={coffee.name} />
          <Card.Body>
            <Card.Title>{coffee.name}</Card.Title>
            <Card.Text>{coffee.description}</Card.Text>
            <Button variant="warning">Order Now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CoffeeCard;
