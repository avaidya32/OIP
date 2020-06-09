import React from "react";
import styles from "./summary.module.scss";
import {
  Container,
  Row,
  Col,
  Image,
  ProgressBar,
  ListGroup,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";

const Summary = ({ body }) => {
  if (!body.Phase3 && body.Phase1) {
    var phase = 1;
    var phases = [body.Phase1];
  } else if (body.Phase3 && !body.Phase4) {
    var phase = 3;
    var phases = [body.Phase1, body.Phase2, body.Phase3];
  } else if (body.Phase4 && !body.Phase5) {
    var phase = 4;
    var phases = [body.Phase1, body.Phase2, body.Phase3, body.Phase4];
  } else if (body.Phase5 && !body.Phase6) {
    var phase = 5;
    var phases = [
      body.Phase1,
      body.Phase2,
      body.Phase3,
      body.Phase4,
      body.Phase5,
    ];
  } else if (body.Phase6) {
    var phase = 6;
    var phases = [
      body.Phase1,
      body.Phase2,
      body.Phase3,
      body.Phase4,
      body.Phase5,
      body.Phase6,
    ];
  }
  console.log(body);
  if (body.Type === "Application-based") {
    return (
      <Container className={styles.container}>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <Image
              src={`/api/upload/image?name=file_${body._id}`}
              height={200}
              width="60%"
              fluid
            />
            <a
              href={`/api/upload/image?name=file_${body._id}`}
              download="lalal.jpg"
            >
              Download
            </a>
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              {body.ProblemName}
            </h2>
            <h4 style={{}}>- {body.OrgName}</h4>
            <ListGroup variant="flush" className={styles.list}>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Type: </span>
                {body.Type}
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "var(--dark)",
                  marginTop: "10px",
                  boxShadow:
                    "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                }}
              >
                <span style={{ color: "var(--textHighlight)" }}>Mode: </span>
                {body.Mode}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Date: </span>
                {body.Date.substring(8, 10)}/{body.Date.substring(5, 7)}/
                {body.Date.substring(0, 4)}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Duration:{" "}
                </span>
                {body.Duration}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Reward: </span>
                {body.Reward}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Application:{" "}
                </span>
                {body.Application}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Progress:{" "}
                </span>
                <ProgressBar animated now={60} />
              </ListGroup.Item>
            </ListGroup>
            <br />
            <h5>
              {" "}
              <Link
                to="desc"
                spy={true}
                smooth={true}
                offset={-60}
                activeClass="active"
              >
                <a>See Problem Statement</a>
              </Link>
            </h5>
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              Phases of the Hackathon:
            </h2>
            {phases.map((element, index) => {
              return (
                <Accordion defaultActiveKey="0">
                  <Card
                    style={{
                      backgroundColor: "var(--dark)",
                      // border: "1px ridge var(--white)",
                      borderBottom: "0",
                      boxShadow:
                        "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index}
                      style={{ color: "var(--textHighlight)" }}
                    >
                      Phase {index + 1}:{" "}
                      <span style={{ color: "var(--white)" }}>
                        {element.Name}
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                        {element.Desc}
                        <br />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              );
            })}
            <br />
            <h5>
              <a href={`/postsolution?hack_id=${body._id}`}>Post Solution</a>
            </h5>
          </Col>
        </Row>
      </Container>
    );
  } else if (body.Type === "Code-sprint") {
    return (
      <Container className={styles.container}>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <Image
              src={`/api/upload/image?name=file_${body._id}`}
              height={200}
              width="60%"
              fluid
            />
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              {body.ProblemName}
            </h2>
            <h4 style={{}}>- {body.OrgName}</h4>
            <ListGroup variant="flush" className={styles.list}>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Type: </span>
                {body.Type}
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "var(--dark)",
                  marginTop: "10px",
                  boxShadow:
                    "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                }}
              >
                <span style={{ color: "var(--textHighlight)" }}>Mode: </span>
                {body.Mode}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Date: </span>
                {body.Date.substring(8, 10)}/{body.Date.substring(5, 7)}/
                {body.Date.substring(0, 4)}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Duration:{" "}
                </span>
                {body.Duration}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Reward: </span>
                {body.Reward}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Progress:{" "}
                </span>
                <ProgressBar animated now={60} />
              </ListGroup.Item>
            </ListGroup>
            <br />
            <h5>
              {" "}
              <Link
                to="desc"
                spy={true}
                smooth={true}
                offset={-60}
                activeClass="active"
              >
                <a>See Software Summary</a>
              </Link>
            </h5>
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              Phases of the Hackathon:
            </h2>
            {phases.map((element, index) => {
              return (
                <Accordion defaultActiveKey="0">
                  <Card
                    style={{
                      backgroundColor: "var(--dark)",
                      // border: "1px ridge var(--white)",
                      borderBottom: "0",
                      boxShadow:
                        "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index}
                      style={{ color: "var(--textHighlight)" }}
                    >
                      Phase {index + 1}:{" "}
                      <span style={{ color: "var(--white)" }}>
                        {element.Name}
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                        {element.Desc}
                        <br />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              );
            })}
            <br />
            <h5>
              <a href={`/postsolution?hack_id=${body._id}`}>Post Solution</a>
            </h5>
          </Col>
        </Row>
      </Container>
    );
  } else if (body.Type === "Group-targeted") {
    return (
      <Container className={styles.container}>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <Image
              src={`/api/upload/image?name=file_${body._id}`}
              height={200}
              width="60%"
              fluid
            />
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              {body.ProblemName}
            </h2>
            <h4 style={{}}>- {body.OrgName}</h4>
            <ListGroup variant="flush" className={styles.list}>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Type: </span>
                {body.Type}
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "var(--dark)",
                  marginTop: "10px",
                  boxShadow:
                    "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                }}
              >
                <span style={{ color: "var(--textHighlight)" }}>Mode: </span>
                {body.Mode}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Date: </span>
                {body.Date.substring(8, 10)}/{body.Date.substring(5, 7)}/
                {body.Date.substring(0, 4)}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Duration:{" "}
                </span>
                {body.Duration}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Reward: </span>
                {body.Reward}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Target Group:{" "}
                </span>
                {body.TargetGroup}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Progress:{" "}
                </span>
                <ProgressBar animated now={60} />
              </ListGroup.Item>
            </ListGroup>
            <br />
            <h5>
              {" "}
              <Link
                to="desc"
                spy={true}
                smooth={true}
                offset={-60}
                activeClass="active"
              >
                <a>See Problem Statement</a>
              </Link>
            </h5>
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              Phases of the Hackathon:
            </h2>
            {phases.map((element, index) => {
              return (
                <Accordion defaultActiveKey="0">
                  <Card
                    style={{
                      backgroundColor: "var(--dark)",
                      // border: "1px ridge var(--white)",
                      borderBottom: "0",
                      boxShadow:
                        "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index}
                      style={{ color: "var(--textHighlight)" }}
                    >
                      Phase {index + 1}:{" "}
                      <span style={{ color: "var(--white)" }}>
                        {element.Name}
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                        {element.Desc}
                        <br />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              );
            })}
            <br />
            <h5>
              <a href={`/postsolution?hack_id=${body._id}`}>Post Solution</a>
            </h5>
          </Col>
        </Row>
      </Container>
    );
  } else if (body.Type === "Language-based") {
    return (
      <Container className={styles.container}>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <Image
              src={`/api/upload/image?name=file_${body._id}`}
              height={200}
              width="60%"
              fluid
            />
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              {body.ProblemName}
            </h2>
            <h4 style={{}}>- {body.OrgName}</h4>
            <ListGroup variant="flush" className={styles.list}>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Type: </span>
                {body.Type}
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "var(--dark)",
                  marginTop: "10px",
                  boxShadow:
                    "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                }}
              >
                <span style={{ color: "var(--textHighlight)" }}>Mode: </span>
                {body.Mode}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Date: </span>
                {body.Date.substring(8, 10)}/{body.Date.substring(5, 7)}/
                {body.Date.substring(0, 4)}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Duration:{" "}
                </span>
                {body.Duration}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Reward: </span>
                {body.Reward}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Chosen Programming Language:{" "}
                </span>
                {body.ProgLanguage}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Progress:{" "}
                </span>
                <ProgressBar animated now={60} />
              </ListGroup.Item>
            </ListGroup>
            <br />
            <h5>
              {" "}
              <Link
                to="desc"
                spy={true}
                smooth={true}
                offset={-60}
                activeClass="active"
              >
                <a>See Problem Statement</a>
              </Link>
            </h5>
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              Phases of the Hackathon:
            </h2>
            {phases.map((element, index) => {
              return (
                <Accordion defaultActiveKey="0">
                  <Card
                    style={{
                      backgroundColor: "var(--dark)",
                      // border: "1px ridge var(--white)",
                      borderBottom: "0",
                      boxShadow:
                        "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index}
                      style={{ color: "var(--textHighlight)" }}
                    >
                      Phase {index + 1}:{" "}
                      <span style={{ color: "var(--white)" }}>
                        {element.Name}
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                        {element.Desc}
                        <br />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              );
            })}
            <br />
            <h5>
              <a href={`/postsolution?hack_id=${body._id}`}>Post Solution</a>
            </h5>
          </Col>
        </Row>
      </Container>
    );
  } else if (body.Type === "Social") {
    return (
      <Container className={styles.container}>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <Image
              src={`/api/upload/image?name=file_${body._id}`}
              height={200}
              width="60%"
              fluid
            />
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              {body.ProblemName}
            </h2>
            <h4 style={{}}>- {body.OrgName}</h4>
            <ListGroup variant="flush" className={styles.list}>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Type: </span>
                {body.Type}
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "var(--dark)",
                  marginTop: "10px",
                  boxShadow:
                    "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                }}
              >
                <span style={{ color: "var(--textHighlight)" }}>Mode: </span>
                {body.Mode}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Date: </span>
                {body.Date.substring(8, 10)}/{body.Date.substring(5, 7)}/
                {body.Date.substring(0, 4)}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Duration:{" "}
                </span>
                {body.Duration}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Reward: </span>
                {body.Reward}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Social Cause:{" "}
                </span>
                {body.Cause}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Progress:{" "}
                </span>
                <ProgressBar animated now={60} />
              </ListGroup.Item>
            </ListGroup>
            <br />
            <h5>
              {" "}
              <Link
                to="desc"
                spy={true}
                smooth={true}
                offset={-60}
                activeClass="active"
              >
                <a>See Problem Statement</a>
              </Link>
            </h5>
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              Phases of the Hackathon:
            </h2>
            {phases.map((element, index) => {
              return (
                <Accordion defaultActiveKey="0">
                  <Card
                    style={{
                      backgroundColor: "var(--dark)",
                      // border: "1px ridge var(--white)",
                      borderBottom: "0",
                      boxShadow:
                        "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index}
                      style={{ color: "var(--textHighlight)" }}
                    >
                      Phase {index + 1}:{" "}
                      <span style={{ color: "var(--white)" }}>
                        {element.Name}
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                        {element.Desc}
                        <br />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              );
            })}
            <br />
            <h5>
              <a href={`/postsolution?hack_id=${body._id}`}>Post Solution</a>
            </h5>
          </Col>
        </Row>
      </Container>
    );
  } else if (body.Type === "Recruitment") {
    return (
      <Container className={styles.container}>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <Image
              src={`/api/upload/image?name=file_${body._id}`}
              height={200}
              width="60%"
              fluid
            />
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              {body.ProblemName}
            </h2>
            <h4 style={{}}>- {body.OrgName}</h4>
            <ListGroup variant="flush" className={styles.list}>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Type: </span>
                {body.Type}
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "var(--dark)",
                  marginTop: "10px",
                  boxShadow:
                    "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                }}
              >
                <span style={{ color: "var(--textHighlight)" }}>Mode: </span>
                {body.Mode}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Date: </span>
                {body.Date.substring(8, 10)}/{body.Date.substring(5, 7)}/
                {body.Date.substring(0, 4)}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Duration:{" "}
                </span>
                {body.Duration}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Reward: </span>
                {body.Reward}
              </ListGroup.Item>
              {/* <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>Application: </span>
                {body.Application}
              </ListGroup.Item> */}
              <ListGroup.Item style={{ backgroundColor: "var(--dark)" }}>
                <span style={{ color: "var(--textHighlight)" }}>
                  Progress:{" "}
                </span>
                <ProgressBar animated now={60} />
              </ListGroup.Item>
            </ListGroup>
            <br />
            <h5>
              {" "}
              <Link
                to="desc"
                spy={true}
                smooth={true}
                offset={-60}
                activeClass="active"
              >
                <a>See Problem Statement</a>
              </Link>
            </h5>
          </Col>
          <Col className={styles.col}>
            <h2 style={{ color: "var(--tertiaryShade)" }}>
              Phases of the Hackathon:
            </h2>
            {phases.map((element, index) => {
              return (
                <Accordion defaultActiveKey="0">
                  <Card
                    style={{
                      backgroundColor: "var(--dark)",
                      // border: "1px ridge var(--white)",
                      borderBottom: "0",
                      boxShadow:
                        "0 15px 15px -3px rgba(0,0,0,.1), 0 15px 15px -2px rgba(0,0,0,.05)",
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index}
                      style={{ color: "var(--textHighlight)" }}
                    >
                      Phase {index + 1}:{" "}
                      <span style={{ color: "var(--white)" }}>
                        {element.Name}
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                        {element.Desc}
                        <br />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              );
            })}
            <br />
            <h5>
              <a href={`/postsolution?hack_id=${body._id}`}>Post Solution</a>
            </h5>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Summary;
