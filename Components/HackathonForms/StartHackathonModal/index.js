import React from "react";
import styles from "./start-hackathon-modal.module.scss";
import { Modal, Accordion, Card, Button } from "react-bootstrap";

const StartHackathonModal = (props) => {
  return (
    <div className={styles.container}>
      <Modal
        {...props}
        className={styles.modal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "var(--dark)",
            borderBottom: "1px solid var(--tertiaryShade)",
          }}
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ backgroundColor: "var(--dark)" }}
          >
            Choose Type of Hackathon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "var(--dark)" }}>
          <Accordion defaultActiveKey="0">
            <Card
              style={{
                backgroundColor: "var(--dark)",
                border: "1px ridge var(--white)",
                borderBottom: "0",
              }}
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                style={{ color: "var(--textHighlight)" }}
              >
                Application-based Hackathon
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Hackathons based on a selected platforms for development, like
                  game development, web development, etc.
                  <br />
                  <Button
                    variant="cta"
                    size="sm"
                    href="/startHackathon?type=Application-based"
                  >
                    Proceed
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{
                backgroundColor: "var(--dark)",
                border: "1px ridge var(--white)",
                borderBottom: "0",
              }}
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="2"
                style={{ color: "var(--textHighlight)" }}
              >
                Programming Language-based Hackathon
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  These are hackathons that focus on creating a working
                  application with a specific programming
                  language(C++,JS,Node.js,etc.).
                  <br />
                  <Button
                    variant="cta"
                    size="sm"
                    href="/startHackathon?type=Language-based"
                  >
                    Proceed
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{
                backgroundColor: "var(--dark)",
                border: "1px ridge var(--white)",
                borderBottom: "0",
              }}
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="3"
                style={{ color: "var(--textHighlight)" }}
              >
                Social Hackathon
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  These are hackathons geared towards a cause. They address
                  prominent issues in the community(healthcare, farming, etc.).
                  <br />
                  <Button
                    variant="cta"
                    size="sm"
                    href="/startHackathon?type=Social"
                  >
                    Proceed
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{
                backgroundColor: "var(--dark)",
                border: "1px ridge var(--white)",
                borderBottom: "0",
              }}
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="4"
                style={{ color: "var(--textHighlight)" }}
              >
                Group-targeted Hackathon
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  These are hackathons that are accessible only to a target
                  group(women, students). They create a co-operative and
                  enabling environment.
                  <br />
                  <Button
                    variant="cta"
                    size="sm"
                    href="/startHackathon?type=Group-targeted"
                  >
                    Proceed
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{
                backgroundColor: "var(--dark)",
                border: "1px ridge var(--white)",
                borderBottom: "0",
              }}
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="5"
                style={{ color: "var(--textHighlight)" }}
              >
                Code Sprint
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  These are hackathons where the participants must create a
                  working solution to the problem in the given period of time.
                  <br />
                  <Button
                    variant="cta"
                    size="sm"
                    href="/startHackathon?type=Code-sprint"
                  >
                    Proceed
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{
                backgroundColor: "var(--dark)",
                border: "1px ridge var(--white)",
              }}
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="6"
                style={{ color: "var(--textHighlight)" }}
              >
                Recruitment Hackathon
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  These are hackathons that focus solely on recruitment from our community of University Students.
                  <br />
                  <Button
                    variant="cta"
                    size="sm"
                    href="/startHackathon?type=Recruitment"
                  >
                    Proceed
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: "var(--dark)",
            borderTop: "1px solid var(--tertiaryShade)",
          }}
        >
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StartHackathonModal;
