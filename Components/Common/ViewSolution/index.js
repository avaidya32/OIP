import React, { useState } from "react";
import styles from "./view-solution.module.scss";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ViewSolution = ({ data }) => {
  console.log("page body:", data);
  const [file, setFile] = useState();
  const [link, setLink] = useState("");
  return (
    <div className={styles.container}>
      <Container className={styles.innerContainer}>
        <Row>
          <Col className={styles.col} style={{ paddingLeft: 0 }}>
            <h2>
              <span style={{ color: "var(--textHighlight)" }}>
                View Solution{" "}
              </span>
              by {` ${data.StartupName}`}
            </h2>
          </Col>
          <Col className={styles.col}>
          <span style={{ color: "var(--textHighlight)" }}><h5>Attached Link:</h5></span>
            {data.Link} <br />
            <br />
            <span style={{ color: "var(--textHighlight)" }}><h5>Download Solution:</h5></span> 
            <a
              href={`/api/upload/image?name=file_${data._id}`}
              download={`${data.StartupName}_solution`}
            >
              <Button variant="cta">Download</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewSolution;
