import React from "react";
import styles from "./apply-problem.module.scss";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import Summary from "./Summary";
import SecondFold from "./SecondFold";

const ApplyPage = ({ dataObject }) => {
  return (
    <div className={styles.container}>
      <Summary body={dataObject} />
      <SecondFold body={dataObject} />
    </div>
  );
};

export default ApplyPage;
