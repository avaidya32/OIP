import React from "react";
import styles from "./pick-mode-modal.module.scss";
import StartHackathonModal from "../StartHackathonModal";
import { Modal, Accordion, Card, Button } from "react-bootstrap";

const PickModeModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
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
            borderBottom: "1px ridge var(--tertiaryShade)",
          }}
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ backgroundColor: "var(--dark)" }}
          >
            Pick Mode of Hackathon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "var(--dark)" }}>
          <Accordion defaultActiveKey="0">
            <Card
              style={{
                backgroundColor: "var(--dark)",
                border: "1px ridge var(--white)",
                borderBottom:"0",
              }}
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                style={{ color: "var(--textHighlight)" }}
              >
                Private
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Invite-only Online Hackathon
                  <br />
                  <Button
                    variant="cta"
                    size="sm"
                    style={{ margin: 10 }}
                    onClick={(e) => {
                      // e.preventDefault();
                      // Router.push(`/startHackthon`);
                      setModalShow(true);
                    }}
                  >
                    Proceed
                  </Button>
                  <StartHackathonModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{
                backgroundColor: "var(--dark)",
                border: "1px ridge var(--white)",
                borderBottom:"0",
              }}
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="2"
                style={{ color: "var(--textHighlight)" }}
              >
                Public
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Hackathon accessible to our entire community.
                  <br />
                  <Button
                    variant="cta"
                    size="sm"
                    style={{ margin: 10 }}
                    onClick={(e) => {
                      // e.preventDefault();
                      // Router.push(`/startHackthon`);
                      setModalShow(true);
                    }}
                  >
                    Proceed
                  </Button>
                  <StartHackathonModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
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
                eventKey="3"
                style={{ color: "var(--textHighlight)" }}
              >
                Offline
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Contact us to set up Offline Hands-on Hackathons.
                  <br />
                  <Button
                    variant="cta"
                    href="/startHackathon?type=Offline"
                    size="sm"
                    style={{ margin: 10 }}
                    
                  >
                    Proceed
                  </Button>
                  <StartHackathonModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
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

export default PickModeModal;
