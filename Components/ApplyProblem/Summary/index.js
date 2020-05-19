import React from "react";
import styles from "./summary.module.scss";
import {
  Container,
  Row,
  Col,
  Image,
  ProgressBar,
  ListGroup,
  Button
} from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";

const ApplyProblem = ({ body }) => {
  return (
    <Container className={styles.container}>
      <Row className={styles.innerContainer}>
        <Col className={styles.Col}>
          <Image src="/chip.svg" height={250} width="80%" fluid />
        </Col>
        <Col className={styles.col}>
          <h2 style={{ color: "var(--tertiaryShade)" }}>{body.ProblemName}</h2>
          <h4 style={{}}>- {body.OrgName}</h4>
          <ListGroup variant="flush">
            <ListGroup.Item
              style={{ backgroundColor: "var(--dark)", marginTop: "10px" }}
            >
              <span style={{ color: "var(--textHighlight)" }}>Mode: </span>
              {body.Mode}
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
              <span style={{ color: "var(--textHighlight)" }}>Date: </span>
              {body.Date.substring(8, 10)}/{body.Date.substring(5, 7)}/
              {body.Date.substring(0, 4)}
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
              <span style={{ color: "var(--textHighlight)" }}>Duration: </span>
              {body.Duration}
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
              <span style={{ color: "var(--textHighlight)" }}>Reward: </span>
              {body.Reward}
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
              <span style={{ color: "var(--textHighlight)" }}>Venue: </span>
              {body.Venue}
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
              <span style={{ color: "var(--textHighlight)" }}>Progress: </span>
              <ProgressBar animated now={60} />
            </ListGroup.Item>
          </ListGroup>
          <br />
          <h5>
            {" "}
            <Link
              to="desc"
              spy={true}
              smooth={true}
              offset={-10}
              activeClass="active"
            >
              <a>See Problem Statement</a>
            </Link>
          </h5>
          
        </Col>
      </Row>
    </Container>
  );
};

export default ApplyProblem;
