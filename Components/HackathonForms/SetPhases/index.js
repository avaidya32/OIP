import React, { useState } from "react";
import Router from "next/Router";
import styles from "./set-phases.module.scss";
import {
  Container,
  Row,
  Col,
  Modal,
  Accordion,
  Card,
  Button,
  Form,
  DropdownButton,
} from "react-bootstrap";

const SetPhases = ({ data }) => {
  //const { data } = data;
  console.log("in set:", data);
  const [phase1Name, setPhase1Name] = useState("Criteria Selection");
  const [phase2Name, setPhase2Name] = useState("Presentation Shortlisting");
  const [phase3Name, setPhase3Name] = useState("Final Round");
  const [phase4Name, setPhase4Name] = useState("");
  const [phase5Name, setPhase5Name] = useState("");
  const [phase6Name, setPhase6Name] = useState("");

  const [phase1Desc, setPhase1Desc] = useState("Filtering of teams based on preliminiary factors.");
  const [phase2Desc, setPhase2Desc] = useState("Shortlisting of remaining teams after seeing POC and Presentation.");
  const [phase3Desc, setPhase3Desc] = useState("Final round where chosen solutions are compared and awarded points.");
  const [phase4Desc, setPhase4Desc] = useState("");
  const [phase5Desc, setPhase5Desc] = useState("");
  const [phase6Desc, setPhase6Desc] = useState("");

  if (data.phases === "1") {
    return (
      <div className={styles.container}>
        <Container>
          <Row className={styles.innerContainer}>
            <Col className={styles.col}>
              <h2 style={{ marginTop: "3vh", paddingLeft: "40px" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Phase Details
                </span>
              </h2>
              <div className={styles.formContainer}>
                <Form>
                  <p>Phase 1 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase1Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase1Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 1 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase1Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase1Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      fetch("/api/phases/phase1", {
                        method: "POST",
                        body: JSON.stringify({
                          id: data.hack_id,
                          Phase1: { Name: phase1Name, Desc: phase1Desc },
                        }),
                        headers: {
                          "Content-type": "application/json; charset=UTF-8",
                        },
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((payload) => {
                          Router.push(`/probpage?id=${data.hack_id}`);
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
  } else if (data.phases === "3") {
    return (
      <div className={styles.container}>
        <Container>
          <Row className={styles.innerContainer}>
            <Col className={styles.col}>
              <h2 style={{ marginTop: "3vh", paddingLeft: "40px" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Set Phases
                </span>
              </h2>
              <div className={styles.formContainer}>
                <Form>
                  <p>Phase 1 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase1Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase1Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 1 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase1Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase1Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <br />
                  <p>Phase 2 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase2Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase2Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 2 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase2Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase2Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <br />
                  <p>Phase 3 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase3Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase3Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 3 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase3Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase3Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      fetch("/api/phases/phase3", {
                        method: "POST",
                        body: JSON.stringify({
                          id: data.hack_id,
                          Phase1: { Name: phase1Name, Desc: phase1Desc },
                          Phase2: { Name: phase2Name, Desc: phase2Desc },
                          Phase3: { Name: phase3Name, Desc: phase3Desc },
                        }),
                        headers: {
                          "Content-type": "application/json; charset=UTF-8",
                        },
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((payload) => {
                          Router.push(`/probpage?id=${data.hack_id}`);
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
  } else if (data.phases === "4") {
    return (
      <div className={styles.container}>
        <Container>
          <Row className={styles.innerContainer}>
            <Col className={styles.col}>
              <h2 style={{ marginTop: "3vh", paddingLeft: "40px" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Set Phases
                </span>
              </h2>
              <div className={styles.formContainer}>
                <Form>
                  <p>Phase 1 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase1Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase1Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 1 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase1Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase1Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 2 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase2Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase2Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 2 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase2Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase2Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 3 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase3Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase3Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 3 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase3Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase3Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 4 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase4Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase4Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 4 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase4Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase4Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      fetch("/api/phases/phase4", {
                        method: "POST",
                        body: JSON.stringify({
                          id: data.hack_id,
                          Phase1: { Name: phase1Name, Desc: phase1Desc },
                          Phase2: { Name: phase2Name, Desc: phase2Desc },
                          Phase3: { Name: phase3Name, Desc: phase3Desc },
                          Phase4: { Name: phase4Name, Desc: phase4Desc },
                        }),
                        headers: {
                          "Content-type": "application/json; charset=UTF-8",
                        },
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((payload) => {
                          Router.push(`/probpage?id=${data.hack_id}`);
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
  } else if (data.phases === "5") {
    return (
      <div className={styles.container}>
        <Container>
          <Row className={styles.innerContainer}>
            <Col className={styles.col}>
              <h2 style={{ marginTop: "3vh", paddingLeft: "40px" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Set Phases
                </span>
              </h2>
              <div className={styles.formContainer}>
                <Form>
                  <p>Phase 1 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase1Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase1Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 1 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase1Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase1Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 2 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase2Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase2Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 2 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase2Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase2Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 3 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase3Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase3Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 3 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase3Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase3Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 4 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase4Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase4Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 4 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase4Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase4Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 5 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase5Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase5Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 5 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase5Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase5Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      fetch("/api/phases/phase5", {
                        method: "POST",
                        body: JSON.stringify({
                          id: data.hack_id,
                          Phase1: { Name: phase1Name, Desc: phase1Desc },
                          Phase2: { Name: phase2Name, Desc: phase2Desc },
                          Phase3: { Name: phase3Name, Desc: phase3Desc },
                          Phase4: { Name: phase4Name, Desc: phase4Desc },
                          Phase5: { Name: phase5Name, Desc: phase5Desc },
                        }),
                        headers: {
                          "Content-type": "application/json; charset=UTF-8",
                        },
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((payload) => {
                          Router.push(`/probpage?id=${data.hack_id}`);
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
  } else if (data.phases === "6") {
    return (
      <div className={styles.container}>
        <Container>
          <Row className={styles.innerContainer}>
            <Col className={styles.col}>
              <h2 style={{ marginTop: "3vh", paddingLeft: "40px" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Set Phases
                </span>
              </h2>
              <div className={styles.formContainer}>
                <Form>
                  <p>Phase 1 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase1Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase1Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 1 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase1Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase1Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 2 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase2Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase2Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 2 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase2Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase2Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 3 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase3Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase3Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 3 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase3Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase3Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 4 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase4Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase4Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 4 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase4Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase4Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 5 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase5Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase5Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 5 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase5Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase5Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 6 Name:</p>
                  <Form.Group controlId="OrgName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={50}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase6Name}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase6Name(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <p>Phase 6 Description:</p>
                  <Form.Group controlId="ProbName" className={styles.formGroup}>
                    <Form.Control
                      maxLength={500}
                      aria-label="name-edit"
                      className={styles.control}
                      type="text"
                      required={true}
                      value={phase6Desc}
                      onChange={(event) => {
                        event.preventDefault();
                        setPhase6Desc(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      fetch("/api/phases/phase5", {
                        method: "POST",
                        body: JSON.stringify({
                          id: data.hack_id,
                          Phase1: { Name: phase1Name, Desc: phase1Desc },
                          Phase2: { Name: phase2Name, Desc: phase2Desc },
                          Phase3: { Name: phase3Name, Desc: phase3Desc },
                          Phase4: { Name: phase4Name, Desc: phase4Desc },
                          Phase5: { Name: phase5Name, Desc: phase5Desc },

                          Phase6: { Name: phase6Name, Desc: phase6Desc },
                        }),
                        headers: {
                          "Content-type": "application/json; charset=UTF-8",
                        },
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((payload) => {
                          Router.push(`/probpage?id=${data.hack_id}`);
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
  }
};
export default SetPhases;
