import React from "react";
import styles from "./summary.module.scss";
import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

const Summary = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <Image src="/chip.svg" height={250} width="80%" />
          </Col>
          <Col className={styles.col}>
            <h2>
              Problem{" "}
              <span style={{ color: "var(--textHighlight)" }}>Statement:</span>
            </h2>
            <p>
              Check summary of Problem Statement here just as a reference, along
              with any attachments.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Summary;
