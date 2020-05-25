import React from "react";
import styles from "./summary.module.scss";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ProgressBar,
} from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";

const Summary = ({ body }) => {
  return (
    <div className={styles.container}>
      <Container>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <Image src={`/api/upload/image?name=file_${body.ProblemName}`} height={250} width="80%" fluid />
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
              <br /><b>Progress</b>:
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
        </Row>
      </Container>
    </div>
  );
};

export default Summary;
