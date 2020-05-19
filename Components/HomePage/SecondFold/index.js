import React from "react";
import styles from "./second-fold.module.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import LoginPage from "../../LoginPage";
import { Element } from "react-scroll";

const SecondFold = () => {
  return (
    <div className={styles.container}>
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                aligntItems: "center",
                paddingLeft: 0,
              }}
            >
              <Image src="/chip.svg" height={290} width="100%" fluid />
            </Col>
            <Col
              style={{
                padding: 40,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className={styles.header}>Experience our Platform</div>
              <div className={styles.subHeader}>
                Register to use KPMG’s new Open Innovation Platform.
              </div>
              <Row>
                <div className={styles.cta}>
                  <Button variant="cta" size="lg" href="/register">
                    Register
                  </Button>
                  <Link
                    to="login"
                    spy={true}
                    smooth={true}
                    offset={0}
                    activeClass="active"
                  >
                    <Button
                      variant="cta"
                      size="lg"
                      href="/login"
                      style={{ marginLeft: 20 }}
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      <Element name="login" style={{alignItems:"center"}}>
        <LoginPage />
      </Element>
    </div>
  );
};

export default SecondFold;
