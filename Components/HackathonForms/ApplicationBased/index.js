import React, { useState } from "react";
// const express = require('express');
// const routes = express().Router();
import Router from "next/Router";
import styles from "./application-based.module.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const ApplicationBased = ({ client_id }) => {
  const [problemName, setProblemName] = useState("");
  const [orgname, setOrgName] = useState("");
  const [mode, setMode] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [duration, setDuration] = useState("");
  const [statement, setStatement] = useState("");
  const [reward, setReward] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState();
  const [application, setApplication] = useState("");
  const [phases, setPhases] = useState("");

  var phase1 = { phase1: "", desc1: "" };
  var phase2 = { phase2: "", desc2: "" };
  var phase3 = { phase3: "", desc3: "" };
  var phase4 = { phase4: "", desc4: "" };
  var phase5 = { phase5: "", desc5: "" };
  var phase6 = { phase6: "", desc6: "" };
  var count = [1, 2, 3, 4, 5, 6];

  console.log(file);
  return (
    <div className={styles.container}>
      <Container>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <h2 style={{ marginTop: "3vh", paddingLeft: "40px" }}>
              Post your{" "}
              <span style={{ color: "var(--textHighlight)" }}>Problem</span>
            </h2>
            <div className={styles.formContainer}>
              <Form>
                <p>Name of Organisation:</p>
                <Form.Group controlId="OrgName" className={styles.formGroup}>
                  <Form.Control
                    maxLength={50}
                    aria-label="name-edit"
                    className={styles.control}
                    type="text"
                    required={true}
                    value={orgname}
                    onChange={(event) => {
                      event.preventDefault();
                      setOrgName(event.target.value);
                    }}
                  />
                </Form.Group>
                <p>Name of Problem:</p>
                <Form.Group controlId="ProbName" className={styles.formGroup}>
                  <Form.Control
                    maxLength={50}
                    aria-label="name-edit"
                    className={styles.control}
                    type="text"
                    required={true}
                    value={problemName}
                    onChange={(event) => {
                      event.preventDefault();
                      setProblemName(event.target.value);
                    }}
                  />
                </Form.Group>
                <p>Selected Platform for development:</p>
                <Form.Group
                  controlId="Application"
                  className={styles.formGroup}
                >
                  <Form.Control
                    maxLength={50}
                    aria-label="name-edit"
                    className={styles.control}
                    type="text"
                    required={true}
                    value={application}
                    onChange={(event) => {
                      event.preventDefault();
                      setApplication(event.target.value);
                    }}
                  />
                </Form.Group>
                <p>Mode of Conduction:</p>
                <Form.Group controlId="mode" className={styles.formGroup}>
                  <Form.Control
                    maxLength={30}
                    aria-label="name-edit"
                    className={styles.control}
                    type="email"
                    required={true}
                    value={mode}
                    onChange={(event) => {
                      event.preventDefault();
                      setMode(event.target.value);
                    }}
                  />
                </Form.Group>
                <p>Date of Conduction:</p>
                <Form.Group controlId="dateHack" className={styles.formGroup}>
                  <Form.Control
                    maxLength={30}
                    aria-label="name-edit"
                    className={styles.control}
                    type="date"
                    required={true}
                    value={date}
                    onChange={(event) => {
                      event.preventDefault();
                      setDate(event.target.value);
                    }}
                  />
                </Form.Group>
                <p>Duration:</p>
                <Form.Group controlId="time" className={styles.formGroup}>
                  <Form.Control
                    maxLength={30}
                    aria-label="CliPass"
                    className={styles.control}
                    type="number"
                    required={true}
                    height="300px"
                    value={duration}
                    onChange={(event) => {
                      event.preventDefault();
                      setDuration(event.target.value);
                    }}
                  />
                </Form.Group>
                <p>Number of Phases:</p>
                <Form.Group controlId="time" className={styles.formGroup}>
                  <Form.Control
                    maxLength={30}
                    aria-label="CliPass"
                    className={styles.control}
                    type="number"
                    required={true}
                    height="300px"
                    value={phases}
                    onChange={(event) => {
                      event.preventDefault();
                      setPhases(event.target.value);
                      if (event.target.value === 1) {
                        return (
                          <>
                            <p>Phase 1 Name:</p>
                            <Form.Group
                              controlId="phase1"
                              className={styles.formGroup}
                            >
                              <Form.Control
                                maxLength={30}
                                aria-label="CliPass"
                                className={styles.control}
                                type="text"
                                required={true}
                                height="300px"
                                value={phase1.name}
                                onChange={(event) => {
                                  event.preventDefault();
                                  phase1.name = event.target.value;
                                }}
                              />
                            </Form.Group>
                            <p>Phase 1 Description:</p>
                            <Form.Group
                              controlId="time"
                              className={styles.formGroup}
                            >
                              <Form.Control
                                maxLength={30}
                                aria-label="CliPass"
                                className={styles.control}
                                type="text"
                                required={true}
                                height="300px"
                                value={phase1.desc1}
                                onChange={(event) => {
                                  event.preventDefault();
                                  phase1.desc1 = event.target.value;
                                  console.log("phase 1:", phase1);
                                }}
                              />
                            </Form.Group>
                          </>
                        );
                      }
                    }}
                  />
                </Form.Group>
                {count.map((element, index) => {
                  if (phases === 1) {
                    return (
                      <>
                        <p>Phase 1 Name:</p>
                        <Form.Group
                          controlId="time"
                          className={styles.formGroup}
                        >
                          <Form.Control
                            maxLength={30}
                            aria-label="CliPass"
                            className={styles.control}
                            type="text"
                            required={true}
                            height="300px"
                            value={phase1.name}
                            onChange={(event) => {
                              event.preventDefault();
                              phase1.name = event.target.value;
                            }}
                          />
                        </Form.Group>
                        <p>Phase 1 Description:</p>
                        <Form.Group
                          controlId="time"
                          className={styles.formGroup}
                        >
                          <Form.Control
                            maxLength={30}
                            aria-label="CliPass"
                            className={styles.control}
                            type="text"
                            required={true}
                            height="300px"
                            value={phase1.desc1}
                            onChange={(event) => {
                              event.preventDefault();
                              phase1.desc1 = event.target.value;
                              console.log("phase 1:", phase1);
                            }}
                          />
                        </Form.Group>
                      </>
                    );
                  }
                })}
                <p>Problem Statement:</p>
                <Form.Group controlId="ProbState" className={styles.formGroup}>
                  <Form.Control
                    maxLength={1000}
                    aria-label="CliPass"
                    className={styles.control}
                    as="textarea"
                    rows="5"
                    required={true}
                    height="300px"
                    value={statement}
                    onChange={(event) => {
                      event.preventDefault();
                      setStatement(event.target.value);
                    }}
                  />
                </Form.Group>
                <p>Reward Type:</p>
                <Form.Group controlId="Reward" className={styles.formGroup}>
                  <Form.Control
                    maxLength={100}
                    aria-label="CliPass"
                    className={styles.control}
                    type="text"
                    required={true}
                    height="300px"
                    value={reward}
                    onChange={(event) => {
                      event.preventDefault();
                      setReward(event.target.value);
                    }}
                  />
                </Form.Group>
                <p>Image Attachment*:</p>
                {/* <form action='/api/upload' method="POST" encType="multipart/form-data">
                  <input type="file" name="file" id="file"></input>
                    <label for="file">Choose file</label>
                  <input type="submit" value="Submit"></input>
                </form> */}
                {/* <form action = '/uploadImage' enctype ="multipart-form-data" method = "POST">
                    <input type = "file" name="myFile" accept="image/*">
                      
                    </input>
                    <input type="sumbit" value = "Upload image"></input>
                </form> */}
                <Form.Group controlId="Img" className={styles.formGroup}>
                  <Form.File
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                    type="file"
                    name="file"
                    id="file"
                    label="Image Input"
                    custom
                  />
                </Form.Group>
                <p>Other Links*:</p>
                <Form.Group controlId="attach" className={styles.formGroup}>
                  <Form.Control
                    maxLength={30}
                    aria-label="CliPass"
                    className={styles.control}
                    type="attachment"
                    required={true}
                    height="300px"
                    value={link}
                    onChange={(event) => {
                      event.preventDefault();
                      setLink(event.target.value);
                    }}
                  />
                </Form.Group>
                <Button
                  variant="cta"
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    fetch("/api/hackathon/putinfo/application", {
                      method: "POST",
                      body: JSON.stringify({
                        ClientId: client_id,
                        OrgName: orgname,
                        ProblemName: problemName,
                        Mode: mode,
                        Date: date,
                        Duration: duration,
                        Statement: statement,
                        Reward: reward,
                        Link: link,
                        Application: application,
                        Type: "Application-based",
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
                        console.log(formData);
                        formData.append("file", file);
                        fetch(`/api/upload?id=${payload.id}`, {
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
                            Router.push(`/probpage?id=${id}`);
                          })
                          .catch((e) => {
                            console.log("error while calling /upload", e);
                            //TODO:
                          });
                      })
                      .catch((e) => {
                        console.log(e);
                      });
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

export default ApplicationBased;
