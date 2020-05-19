import React from "react";
import styles from "./startup-home.module.scss";
import Summary from "./Summary"
import SecondFold from "./SecondFold"
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

const StartupHome = ({data}) => {
  return (
    <>
      {/*<Summary />/*/}
      <SecondFold body ={data}/>
    </>
  );
};

export default StartupHome;
