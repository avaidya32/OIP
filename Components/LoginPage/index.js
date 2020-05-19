import React, { useState } from "react";
import styles from "./login-page.module.scss";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.innerContainer}>
        <Row>
          <Col className = {styles.col} style={{ paddingLeft: 0 }}>
            <h2>
              Login to start{" "}
              <span style={{ color: "var(--textHighlight)" }}>Innovating</span>
            </h2>
          </Col>
          <Col className={styles.col}>
            <div className={styles.formContainer}>
              <Form>
                <p>Username:</p>
                <Form.Group controlId="Username" className={styles.formGroup}>
                  <Form.Control
                    maxLength={30}
                    aria-label="name-edit"
                    className={styles.control}
                    type="text"
                    required={true}
                  />
                </Form.Group>
                <p>Password:</p>
                <Form.Group controlId="Pass" className={styles.formGroup}>
                  <Form.Control
                    maxLength={30}
                    aria-label="name-edit"
                    className={styles.control}
                    type="password"
                    required={true}
                  />
                </Form.Group>
                <Button variant="cta" size="lg" href="/clientHome">
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
