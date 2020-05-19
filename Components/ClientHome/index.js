import React from "react";
import styles from "./client-home.module.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Summary from "./Summary"
import SecondFold from "./SecondFold";

const ClientHome = () =>{
    return(
        <>
            <Summary/>
            <SecondFold/>
        </>
    )
}

export default ClientHome;