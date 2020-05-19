import React from "react";
import styles from "./hero-section.module.scss";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ProgressBar,
} from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";

const HeroSection = ({ body }) => {
  return (
    <div className={styles.container}>
      <Container>
        <Row className={styles.innerContainer}>
          <Col className={styles.col}>
            <Image src="/chip.svg" height={250} width="80%" fluid />
          </Col>
          <Col className={styles.col}>
            <h2>
              <span style={{ color: "var(--textHighlight)" }}>
                {body.OrgName}
              </span>
            </h2>
            <p>
              <b>Sector:</b>: {body.Sector}
              <br /> <b>Technology</b>: {body.Tech}
              <br /> <b>Description</b>: {body.Desc}
              <br /><b></b>
            </p>
            {/* <ProgressBar animated now={60} /> */}
            <br />
            <Link
              to="start"
              spy={true}
              smooth={true}
              offset={-10}
              activeClass="active"
            >
              <Button variant="cta">See Credentials</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
