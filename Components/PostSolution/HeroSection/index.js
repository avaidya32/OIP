import React, { useState } from "react";
import styles from "./hero-section.module.scss";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const HeroSection = () => {
  const [file, setFile] = useState();
  return (
    <div className={styles.container}>
      <Container className={styles.innerContainer}>
        <Row>
          <Col className={styles.col} style={{ paddingLeft: 0 }}>
            <h2>
              Post{" "}
              <span style={{ color: "var(--textHighlight)" }}>Solution</span>
            </h2>
          </Col>
          <Col className={styles.col}>
            <div className={styles.formContainer}>
              <Form>
                <Form.Group controlId="Img" className={styles.formGroup}>
                  <Form.File
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                    type="file"
                    name="file"
                    id="file"
                    label="Attach File"
                    custom
                  />
                </Form.Group>
                <Button
                  variant="cta"
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    const formData = new FormData();
                    formData.append("file", file);
                    fetch(`/api/upload/solution`, {
                      method: "POST",
                      // body: JSON.stringify({
                      //   file: formData,
                      //   // name: name
                      //   name: problemName
                      // })
                      body: formData,
                    })
                      .then((res) => {
                        return res.json();
                      })
                      .then((response) => {
                        // Router.push(`/probPage?name=${name}`);
                      })
                      .catch((e) => {
                        console.log("error while calling /upload", e);
                        //TODO:
                      });
                    //Router.push(`/probPage?name=${name}`);
                  }}
                >
                  Post Solution
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
