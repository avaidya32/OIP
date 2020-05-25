import React from "react";
import styles from "./summary.module.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Summary = ({client_id}) => {
    return(
        <div className={styles.container}>
            <h4><b>Innovation Summary</b></h4>
            <Container>
                <Row style = {{backgroundColor:'var(--secondaryShade)', padding: 15, borderRadius: 15}}>
                    <Col className={styles.col}>
                        <div className = {styles.header}>Activity 1</div>
                        <div className = {styles.subHeader}>Progress Summary</div>
                    </Col>
                    <Col>
                        <div className = {styles.header}>Activity 2</div>
                        <div className = {styles.subHeader}>Progress Summary</div>
                    </Col>
                    <Col>
                        <div className = {styles.header}>Activity 3</div>
                        <div className = {styles.subHeader}>Progress Summary</div>
                    </Col>
                    <Col>
                        <div className = {styles.header}>Activity 4</div>
                        <div className = {styles.subHeader}>Progress Summary</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Summary;