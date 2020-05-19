import React, { useState } from "react";
import styles from "./register-page.module.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import RegisterForm from "../Common/RegisterForm";

const RegisterPage = () => {
  const [page, togglePage] = useState("Client");
  let header, colouredText;
  switch (page) {
    case "Client":
      header = "Find your ";
      colouredText = "Solutions";
      break;
    case "Startup":
      header = "Take your Startup to the next ";
      colouredText = "Level";
      break;
    case "Student":
      header = "Kickstart your ";
      colouredText = "Career";
      break;
    case "VC":
      header = "Invest in the ";
      colouredText = "Future";
      break;
    case "University":
      header = "Enable your ";
      colouredText = "Students";
      break;
  }

  return (
    <div className={styles.container}>
      <Container className={styles.innerContainer}>
        <Row>
          <Col className={styles.colPrimary}>
            <h2 style={{ whiteSpace: "nowrap", alignItems:"flex-start" }}>
              {header}
              <span style={{ color: "var(--textHighlight)" }}>
                {colouredText}
              </span>
            </h2>
          </Col>
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
            <RegisterForm page={page} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default RegisterPage;
