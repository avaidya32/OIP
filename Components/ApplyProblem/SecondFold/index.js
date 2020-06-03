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
} from "react-bootstrap";
import { Element } from "react-scroll";

const SecondFold = ({ body }) => {
  return (
    <div>
      <Element name="desc">
        <Container className={styles.container}>
          <Row>
            <Col className={styles.col}>
              <h1>Description</h1>
            </Col>
          </Row>
          <Row>
            <Col className={styles.col}><p>{body.Statement}</p></Col>
          </Row>
        </Container>
      </Element>
    </div>
  );
};

export default SecondFold;
