import React, { useState } from "react";
import styles from "./hero-section.module.scss";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const HeroSection = ({ data }) => {
  console.log('pag body:', data);
  const [file, setFile] = useState();
  const [link, setLink] = useState("");
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
                <Form.Group controlId="link" className={styles.formGroup}>
                  <Form.Control
                    maxLength={30}
                    aria-label="link"
                    className={styles.control}
                    type="text"
                    height="300px"
                    value={link}
                    onChange={(event) => {
                      event.preventDefault();
                      setLink(event.target.value);
                    }}
                  />
                </Form.Group>
                {/* <Button
                  variant="cta"
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    const formData = new FormData();
                    formData.append("file", file);
                    fetch(`/api/upload/image`, {
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
                </Button> */}
                <Button
                  variant="cta"
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    fetch("/api/solution/putinfo", {
                      method: "POST",
                      body: JSON.stringify({
                        HackathonId: data.hack_id,
                        StartupId: data.startup_id,
                        StartupName: data.startup_name,
                        Link: link,
                      }),
                      headers: {
                        "Content-type": "application/json; charset=UTF-8",
                      },
                    })
                      .then((res) => {
                        return res.json();
                      })
                      .then((payload) => {
                        const { name, _id } = payload;
                        const id = payload.id;
                        const formData = new FormData();
                        console.log("formData:", formData);
                        formData.append("file", file);
                        fetch(`/api/upload?id=${payload.id}`, {
                          method: "POST",
                          body: formData,
                        })
                          .then((res) => {
                            console.log("Chain response received");
                            return res.json();
                          })
                          .then((response) => {
                            console.log("response2 resolved:", response);
                            // Router.push(`/setphases?id=${id}&phases=${phases}`);
                          })
                          .catch((e) => {
                            console.log("error while calling /upload", e);
                            //TODO:
                          });
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                    // Router.push(`/setphases?id=${id}&phases=${phases}`);
                  }}
                >
                  Post Problem
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
