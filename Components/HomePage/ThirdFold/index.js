import React from "react";
import styles from "./third-fold.module.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
//import { Circle } from "react-shapes";
import { Element } from "react-scroll";
import LoginPage from "../../LoginPage";
const ThirdFold = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col className={styles.col}>
            <span
              style={{ backgroundColor: "rgba(103, 141, 152, 0.5)" }}
              className={styles.descriptionPrimary}
            >
              10000
            </span>
            <span className={styles.side}>Client Organisations</span>
          </Col>
          <Col className={styles.col}>
            <span
              style={{ backgroundColor: "rgba(215, 208, 214, 0.54)" }}
              className={styles.descriptionSecondary}
            >
              1762
            </span>
            <span className={styles.side}>Incorporated Startups</span>
          </Col>
          <Col className={styles.col}>
            <span
              style={{ backgroundColor: "rgba(108, 245, 194, 0.53)" }}
              className={styles.descriptionPrimary}
            >
              8172
            </span>
            <span className={styles.side}>Affiliated Universities</span>
          </Col>
          <Col className={styles.col}>
            <span
              style={{ backgroundColor: "rgba(240, 114, 129, 0.34)" }}
              className={styles.descriptionSecondary}
            >
              98989
            </span>
            <span className={styles.side}>Solutions Provided</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThirdFold;
