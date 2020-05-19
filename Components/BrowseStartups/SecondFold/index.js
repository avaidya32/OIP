import React, { useState } from "react";
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
  const [tech, setTech] = useState("Technology");
  const [sector, setSector] = useState("Sector of Industry");
  
  const { data } = body;
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col className={styles.col}>
            <h2>
              Glimpse into the{" "}
              <span style={{ color: "var(--textHighlight)" }}>Future</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <DropdownButton
            variant="cta"
            title={sector}
            size="sm"
            style={{ marginRight: "10px" }}
          >
            <Dropdown.Item
              // href="#/action-1"
              onClick={() => {
                setSector("Pharmaceutical");
              }}
            >
              Pharmaceutical
            </Dropdown.Item>
            <Dropdown.Item
              //href="#/action-2"
              onClick={() => {
                setSector("Financial");
              }}
            >
              Financial
            </Dropdown.Item>
            <Dropdown.Item
              //href="#/action-3"
              onClick={() => {
                setSector("IT");
              }}
            >
              IT
            </Dropdown.Item>
            <Dropdown.Item
              //href="#/action-3"
              onClick={() => {
                setSector("Sector of Industry");
              }}
            >
              All
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton variant="cta" title={tech} size="sm">
            <Dropdown.Item
              //href="#/action-1"
              onClick={() => {
                setTech("5G");
              }}
            >
              5G
            </Dropdown.Item>
            <Dropdown.Item
              //href="#/action-2"
              onClick={() => {
                setTech("IoT");
              }}
            >
              IoT
            </Dropdown.Item>
            <Dropdown.Item
              //href="#/action-3"
              onClick={() => {
                setTech("ML");
              }}
            >
              ML
            </Dropdown.Item>
            <Dropdown.Item
              //href="#/action-3"
              onClick={() => {
                setTech("Technology");
              }}
            >
              All
            </Dropdown.Item>
          </DropdownButton>
        </Row>

        <Row>
          <CardDeck>
            {data.map((element, index) => {
              return (
                <Col md="3" className={styles.cardContainer} key={index}>
                  <Card
                    className={
                      tech === "Technology" || sector === "Sector of Industry"
                        ? styles.card
                        : tech === element.Tech || sector === element.Sector
                        ? styles.card
                        : styles.hideCard
                    }
                  >
                    <Card.Img variant="top" src="globe.jpg" />
                    <Card.Body>
                      <Card.Title>
                        <b>{element.OrgName}</b>
                      </Card.Title>
                      <Card.Text style={{ marginBottom: "8px" }}>
                        <p>Sector: {element.Sector}</p>
                        <p>Technology: {element.Tech}</p>
                      </Card.Text>
                      <Button
                        variant="cta"
                        marginTop="10px"
                        href={`/startuppage?id=${element._id}`}
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
