import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
          <Card.Text text={"dark"}>03 / 01 / 1995</Card.Text>
          <Card.Text text={"dark"}>Istanbul, TURKEY</Card.Text>
          <a href="./contact">
            {" "}
            <Button variant="dark" active>
              <span style={{ color: "white" }}>Contact</span>
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
