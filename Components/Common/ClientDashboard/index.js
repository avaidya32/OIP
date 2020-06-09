import React, { useState } from "react";
import styles from "./client-dashboard.module.scss";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ProgressBar,
  Card,
  CardColumns,
} from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";
import { AiOutlineDown } from "react-icons/ai";
import Router from "next/Router";

const ClientDashboard = ({ info }) => {
  function getProgress(date1, date2, dur) {
    let progress;
    const year = date1.getFullYear() - date2.substring(0, 4);
    const month = date1.getMonth() + 1 - date2.substring(5, 7);
    const day = date1.getDate() - date2.substring(8, 10);
    if (year != 0 || month != 0 || day * 24 - dur < 0) {
      return 100;
    } else {
      return (dur / (day * 24)) * 100;
    }
  }
  const today = new Date();
  console.log(today);
  console.log(info);
  const { data, role } = info;
  console.log("data", data);
  const [set, toggleSet] = useState("");
  return (
    <div className={styles.container}>
      {/* <Container className={styles.innerContainer}> */}
      <Row style={{ minHeight: "150px" }}>
        <Col className={styles.col1} md="3">
          <Card.Title as="h5" align="center">
            Active Hackathons
          </Card.Title>
          {data.map((element, index) => {
            return (
              <Card className={styles.card}>
                <Card.Body
                  onClick={(e) => {
                    toggleSet(element._id);
                  }}
                >
                  {element.ProblemName}
                </Card.Body>
              </Card>
            );
          })}
        </Col>
        <Col
          md="8"
          minheight="50%"
          maxheight="90%"
          marginLeft="0"
          className={styles.col2}
        >
          {data.map((element, index) => {
            if (element._id === set) {
              return (
                <>
                  <Card.Title as="h5" align="center" minWidth="50%">
                    {element.ProblemName}
                  </Card.Title>
                  <Card.Body><b>Type:</b> {element.Type}</Card.Body>
                  <Card.Body><b>
                    Start Date:</b> {element.Date.substring(8, 10)}/
                    {element.Date.substring(5, 7)}/
                    {element.Date.substring(0, 4)}
                  </Card.Body>
                  <Card.Body><b>Duration:</b> {element.Duration}</Card.Body>
                  <Card.Body><b>Progress:</b> </Card.Body>
                  <Card.Body>
                    <ProgressBar
                      animated
                      now={getProgress(today, element.Date, element.Duration)}
                    />
                  </Card.Body>
                  <Card.Body
                    className={styles.seeMore}
                    href={`/probpage?id=${element._id}`}
                    onClick={() =>{
                      Router.push(`/probpage?id=${element._id}&role=${role}`);
                    }}
                  >
                    See More
                  </Card.Body>
                  {/*<Image className = {styles.image} src={`/api/upload/image?name=file_${element._id}`} /> */}
                </>
              );
            }
          })}
        </Col>
        {/* <Col md="4" maxHeight="50%">
          <Row className={styles.col1} style={{ minHeight: "50%" }}>
            <Card.Title as="h5" align="center" minWidth="50%">
              Number of Conducted Hackathons
            </Card.Title>
          </Row>
          <Row className={styles.col1} style={{ minHeight: "50%" }}>
            <Card.Title as="h5" align="center" minWidth="50%">
              Upcoming Events
            </Card.Title>
          </Row>
        </Col> */}
      </Row>
      <Row
        className={styles.row}
        style={{
          display: "flex",
          verticalAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Link
          to="options"
          spy={true}
          smooth={true}
          offset={-10}
          activeClass="active"
        >
          <AiOutlineDown
            style={{ color: "var(--tertiaryShade)" }}
            className="global-class-name"
          />
        </Link>
      </Row>
    </div>
  );
};

export default ClientDashboard;
