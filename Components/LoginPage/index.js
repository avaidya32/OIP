import React, { useState } from "react";
import styles from "./login-page.module.scss";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GoogleButton from "react-google-button";
import Router from "next/router";
import { GithubLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import {ParallaxProvider} from "react-scroll-parallax";

const LoginPage = () => {
  const [page, togglePage] = useState("Client");
  let link;
  switch (page) {
    case "Client":
      link = "/api/auth/client-local";
      break;
    case "Startup":
      link="/api/auth/startup-local";
      break;
    // case "Student":
    //   header = "Kickstart your ";
    //   colouredText = "Career";
    //   break;
    // case "VC":
    //   header = "Invest in the ";
    //   colouredText = "Future";
    //   break;
    // case "University":
    //   header = "Enable your ";
    //   colouredText = "Students";
    //   break;
  }

  return (
    <ParallaxProvider>
    <div className={styles.container}>
      <Container className={styles.innerContainer}>
        <Row>
          {/* <Col className={styles.col} style={{ paddingLeft: 0 }}>
            <h2>
              Login to start{" "}
              <span style={{ color: "var(--textHighlight)" }}>Innovating</span>
            </h2>
          </Col> */}
          <Col className={styles.col}>
            <h5>
              <a
                className={
                  page === "Client" ? styles.highlight : styles.noHighlight
                }
                onClick={() => {
                  togglePage("Client");
                }}
              >
                Client{" "}
              </a>
              <a
                className={
                  page === "Startup" ? styles.highlight : styles.noHighlight
                }
                onClick={() => {
                  togglePage("Startup");
                }}
              >
                Startup{" "}
              </a>
              <a
                className={
                  page === "Student" ? styles.highlight : styles.noHighlight
                }
                onClick={() => {
                  togglePage("Student");
                }}
              >
                Student{" "}
              </a>
              <a
                className={
                  page === "VC" ? styles.highlight : styles.noHighlight
                }
                onClick={() => {
                  togglePage("VC");
                }}
              >
                VC{" "}
              </a>
              <a
                className={
                  page === "University" ? styles.highlight : styles.noHighlight
                }
                onClick={() => {
                  togglePage("University");
                }}
              >
                University{" "}
              </a>
            </h5>
          </Col>
          <Col className={styles.col}>
            <div className={styles.formContainer}>
              <Form action={link}>
                <p>Username:</p>
                <Form.Group controlId="username" className={styles.formGroup}>
                  <Form.Control
                    maxLength={30}
                    aria-label="name-edit"
                    className={styles.control}
                    type="text"
                    required={true}
                    name="username"
                  />
                </Form.Group>
                <p>Password:</p>
                <Form.Group controlId="password" className={styles.formGroup}>
                  <Form.Control
                    maxLength={30}
                    aria-label="name-edit"
                    className={styles.control}
                    type="password"
                    required={true}
                    name="password"
                  />
                </Form.Group>
                <Button
                  variant="cta"
                  size="lg"
                  //href="/api/auth/client-local"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              <GoogleLoginButton
                onClick={(e) => {
                  if (page === "Client") {
                    Router.push("/api/auth/google-client");
                  } else if (page === "Startup") {
                    Router.push("/api/auth/google-startup");
                  }
                }}
              />
              <GithubLoginButton
                onClick={(e) => {
                  if (page === "Client") {
                    Router.push("/api/auth/github-client");
                  } else if (page === "Startup") {
                    Router.push("/api/auth//github-startup");
                  }
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </ParallaxProvider>
  );
};

export default LoginPage;
