import React from "react";
import styles from "./second-fold.module.scss";
const mongoose = require("mongoose");
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  InputGroup,
  Card,
  Dropdown,
  DropdownButton,
  CardDeck,
} from "react-bootstrap";

const SecondFold = ({ body }) => {
  const { data } = body;
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col className={styles.col}>
            <h2>
              Take your{" "}
              <span style={{ color: "var(--textHighlight)" }}>Pick</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <DropdownButton
            variant="cta"
            title="Sector of Industry:"
            size="sm"
            style={{ marginRight: "10px" }}
          >
            <Dropdown.Item href="#/action-1">Pharmacuetical</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Financial</Dropdown.Item>
            <Dropdown.Item href="#/action-3">IT</Dropdown.Item>
          </DropdownButton>
          <DropdownButton variant="cta" title="Technology:" size="sm">
            <Dropdown.Item href="#/action-1">5G</Dropdown.Item>
            <Dropdown.Item href="#/action-2">IoT</Dropdown.Item>
            <Dropdown.Item href="#/action-3">ML</Dropdown.Item>
          </DropdownButton>
        </Row>

        <Row>
          <CardDeck>
            {data.map((element, index) => {
              const year = element.Date.substring(0, 4);
              const month = element.Date.substring(5, 7);
              const date = element.Date.substring(8, 10);
              return (
                <Col md="3" className={styles.cardContainer} key={index}>
                  <Card className={styles.card}>
                    <Card.Img variant="top" src="globe.jpg" />
                    <Card.Body>
                      <Card.Title><b>{element.ProblemName}</b></Card.Title>
                      <Card.Text style={{ marginBottom: "8px" }}>
                        <p>Organisation Name: {element.OrgName}</p>
                        <p>Date: {date}/{month}/{year}</p>
                        <p>Duration: {element.Duration}</p>
                        <p>Reward: {element.Reward}</p>
                      </Card.Text>
                      <Button variant="cta" marginTop="10px" href = {`/applyProblem?name=${element.ProblemName}`}
                      >
                        Check it out
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default SecondFold;
