import React from "react";
import styles from "./second-fold.module.scss";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  InputGroup,
  Card,
  DropdownButton,
  Dropdown,
  CardDeck,
} from "react-bootstrap";
import {Element} from "react-scroll";

const SecondFold = () => {
  return (
    <div className={styles.container}>
      <Element name="solns">
      <Container>
        <Row>
          <Col className={styles.col}>
            <h2>
              Submitted{" "}
              <span style={{ color: "var(--textHighlight)" }}>Solutions</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <DropdownButton variant="cta" title="Sort by:" size="sm">
            <Dropdown.Item href="#/action-1">Date of Submission</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Rating of Startup</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Verified Startups</Dropdown.Item>
          </DropdownButton>
        </Row>
        <Row>
          <CardDeck>
            <Col md="3" className={styles.cardContainer}>
              <Card className={styles.card}>
                <Card.Img variant="top" src="4.jpg" />
                <Card.Body>
                  <Card.Title>Name of Startup</Card.Title>
                  <Card.Text>
                    <p>Organisation Name:</p>
                    <p>Submitted at:</p>
                  </Card.Text>
                  <Button variant="cta" marginTop="10px">
                    View Solution
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="3" className={styles.cardContainer}>
              <Card className={styles.card}>
                <Card.Img variant="top" src="4.jpg" />
                <Card.Body>
                  <Card.Title>Name of Startup</Card.Title>
                  <Card.Text>
                    <p>Organisation Name:</p>
                    <p>Submitted at:</p>
                  </Card.Text>
                  <Button variant="cta" marginTop="10px">
                    View Solution
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="3" className={styles.cardContainer}>
              <Card className={styles.card}>
                <Card.Img variant="top" src="4.jpg" />
                <Card.Body>
                  <Card.Title>Name of Startup</Card.Title>
                  <Card.Text>
                    <p>Organisation Name:</p>
                    <p>Submitted at:</p>
                  </Card.Text>
                  <Button variant="cta" marginTop="10px">
                    View Solution
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="3" className={styles.cardContainer}>
              <Card className={styles.card}>
                <Card.Img variant="top" src="4.jpg" />
                <Card.Body>
                  <Card.Title>Name of Startup</Card.Title>
                  <Card.Text>
                    <p>Organisation Name:</p>
                    <p>Submitted at:</p>
                  </Card.Text>
                  <Button variant="cta" marginTop="10px">
                    View Solution
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="3" className={styles.cardContainer}>
              <Card className={styles.card}>
                <Card.Img variant="top" src="4.jpg" />
                <Card.Body>
                  <Card.Title>Name of Startup</Card.Title>
                  <Card.Text>
                    <p>Organisation Name:</p>
                    <p>Submitted at:</p>
                  </Card.Text>
                  <Button variant="cta" marginTop="10px">
                    View Solution
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </CardDeck>
        </Row>
      </Container>
      </Element>
    </div>
  );
};

export default SecondFold;
