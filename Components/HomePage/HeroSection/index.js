import React from "react";
import styles from "./hero-section.module.scss";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <Container style={{ maxWidth: "100%", maxHeight: "100%", borderRadius:"5px", marginTop:"5px"}}>
        <Row>
          <Col style={{ paddingLeft: 0, borderRadius: "5px" }}>
            <Carousel className={styles.carouselContainer}>
              <Carousel.Item className={styles.carousel}>
                <img
                  className="d-block w-100"
                  src="3.jpg"
                  alt="First slide"
                  height="500px"
                  fluid
                />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className={styles.carousel}>
                <img
                  className="d-block w-100"
                  src="hacka.jpg"
                  alt="Third slide"
                  height="500px"
                  fluid
                />

                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className={styles.carousel}>
                <img
                  className="d-block w-100"
                  src="globe.jpg"
                  alt="Third slide"
                  height="500px"
                  fluid
                />

                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
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
                offset={-10}
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
