import React from "react";
import styles from "./client-home.module.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Summary from "./Summary";
import ClientDashboard from "../Common/ClientDashboard";
import SecondFold from "./SecondFold";

const ClientHome = ({ info }) => {
  return (
    <>
      <ClientDashboard info={info} />
      <SecondFold info={info} />
    </>
  );
};

export default ClientHome;
