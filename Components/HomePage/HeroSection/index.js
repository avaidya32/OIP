import React from "react";
import styles from "./hero-section.module.scss";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <Container
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "5px",
          marginTop: "5px",
        }}
      >
        <Row>
          <Col style={{ paddingLeft: 0, borderRadius: "5px" }}>
            <Carousel className={styles.carouselContainer}>
              <Carousel.Item className={styles.carousel}>
                <div className={styles.imgContainer}>
                  <img
                    className={styles.img}
                    src="post_prob.svg"
                    alt="First slide"
                    height="500px"
                    fluid
                  />
                </div>
                <Carousel.Caption>
                  <h4>
                    <span style={{ color: "var(--textHighlight)" }}>
                      Post Hackathons/Ideathons
                    </span>
                  </h4>
                  <p>
                    As an Enterprise, you can post tailored Hackathons/Ideathons
                    on our Platform.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className={styles.carousel}>
                <div className={styles.imgContainer}>
                  <img
                    className={styles.img}
                    src="browse.svg"
                    alt="Third slide"
                    height="500px"
                    fluid
                  />
                </div>
                <Carousel.Caption>
                  <h4>
                    <span style={{ color: "var(--textHighlight)" }}>
                      Browse Startups/Students
                    </span>
                  </h4>
                  <p>
                    As an Enterprise, our platform connects you to upcoming
                    Startups and our Student community.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className={styles.carousel}>
                <div className={styles.imgContainer}>
                  <img
                    className={styles.img}
                    src="post_soln.svg"
                    alt="Third slide"
                    height="500px"
                    fluid
                  />
                </div>
                <Carousel.Caption>
                  <h4>
                    <span style={{ color: "var(--textHighlight)" }}>
                      Participate in Hackathons/Ideathons
                    </span>
                  </h4>
                  <p>As a registered Startup or Student on our platform, you can participate in Hackathons/Ideathons.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            style={{
              padding: 25,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <div className={styles.header}>
              Foster quicker and better solutions through our platform
            </div>
            <div className={styles.subHeader}>
              Our intuitive OI Platform allows provides end-to-end development
              of ideas and introduces you to exciting new technologies!
            </div>
            <div style={{ marginTop: "10px" }}>
              <Link
                to="reglog"
                spy={true}
                smooth={true}
                offset={-80}
                activeClass="active"
              >
                <Button variant="cta" size="lg" href="/register" margin="20px">
                  Join our Platform
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HeroSection;
