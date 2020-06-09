import React from "react";
import styles from "./summary.module.scss";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Accordion,
  Button,
  ProgressBar,
} from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";

const Summary = ({ body }) => {
  if (body.Phase1 && !body.Phase2) {
    var phase = 1;
    var phases = [body.Phase1];
  } else if (body.Phase3 && !body.Phase4) {
    var phase = 3;
    var phases = [body.Phase1, body.Phase2, body.Phase3];
  } else if (body.Phase4 && !body.Phase5) {
    var phase = 4;
    var phases = [body.Phase1, body.Phase2, body.Phase3, body.Phase4];
  } else if (body.Phase5 && !body.Phase6) {
    var phase = 5;
    var phases = [
      body.Phase1,
      body.Phase2,
      body.Phase3,
      body.Phase4,
      body.Phase5,
    ];
  } else if (body.Phase6) {
    var phase = 6;
    var phases = [
      body.Phase1,
      body.Phase2,
      body.Phase3,
      body.Phase4,
      body.Phase5,
      body.Phase6,
    ];
  }
  return (
    <div className={styles.container}>
      <Container>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <Image
              src={`/api/upload/image?name=file_${body._id}`}
              onError="/globe.jpg"
              height={250}
              width="80%"
              fluid
              alt="Summary-Image"
            />
          </Col>
          <Col className={styles.col}>
            <h2>
              <span style={{ color: "var(--textHighlight)" }}>
                {body.ProblemName}
              </span>
            </h2>
            <p>
              <b>Mode</b>: {body.Mode}
              <br /> <b>Date</b>: {body.Date.substring(8, 10)}/
              {body.Date.substring(5, 7)}/{body.Date.substring(0, 4)}
              <br /> <b>Venue</b>: {body.Venue}
              <br /> <b>Duration</b>: {body.Duration}
              <br />
              <b>Progress</b>:
            </p>
            <ProgressBar animated now={60} />
            <br />
            <Link
              to="solns"
              spy={true}
              smooth={true}
              offset={-10}
              activeClass="active"
            >
              <Button variant="cta">See Solutions</Button>
            </Link>
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              Phases of the Hackathon:
            </h2>
            {phases.map((element, index) => {
              return (
                <Accordion defaultActiveKey="0">
                  <Card
                    style={{
                      backgroundColor: "var(--dark)",
                      // border: "1px ridge var(--white)",
                      borderBottom: "0",
                      boxShadow:
                        "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index}
                      style={{ color: "var(--textHighlight)" }}
                    >
                      Phase {index + 1}:{" "}
                      <span style={{ color: "var(--white)" }}>
                        {element.Name}
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                        {element.Desc}
                        <br />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Summary;
