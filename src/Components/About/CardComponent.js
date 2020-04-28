import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Route, Link } from "react-router-dom";
import "./AboutCard.css";
import React from "react";

export default function CardComponent() {
  return (
    <div style={{ zIndex: "950" }}>
      <Card
        border="light"
        bg={"danger"}
        text={"light"}
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={require("./foto.jpg")} />
        <Card.Body>
          <Card.Title>Kaan Küreli</Card.Title>
          <Card.Text text={"dark"}>kkureli@gmail.com</Card.Text>
          <Card.Text text={"dark"}>+90 536 979 01 95</Card.Text>
          <Card.Text text={"dark"}>03 / 01 / 1995</Card.Text>
          <Card.Text text={"dark"}>Istanbul, TURKEY</Card.Text>
          <Link to="./contact">
            <Button className="aboutContactBtn" variant="dark" active>
              <span style={{ color: "white" }}>Contact</span>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
