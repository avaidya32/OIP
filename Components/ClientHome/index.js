import React from "react";
import styles from "./client-home.module.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Summary from "./Summary"
import SecondFold from "./SecondFold";

const ClientHome = ({client_id}) =>{
    return(
        <>
            <Summary client_id ={client_id}/>
            <SecondFold client_id = {client_id}/>
        </>
    )
}

export default ClientHome;