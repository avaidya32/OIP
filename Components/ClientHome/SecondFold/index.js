import React from 'react';
import styles from './second-fold.module.scss';
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import Router from "next/Router";

const SecondFold = ({client_id}) => {
    return (
        <div className = {styles.container}> 
            <Container>
                <Row className = {styles.rowPrimary}>
                    <Col className = {styles.col}>
                        <h3><b>Start a Hackathon!</b></h3>
                        <span style = {{fontSize: 14}}>Post a problem to be 
                        solved by our community of curated Startups and Universities</span>
                        <Button variant = "cta" size = "md" style = {{margin: 10}} onClick={(e) =>{
                            e.preventDefault();
                            Router.push(`/startHackthon`);
                        }}>Post a problem</Button>
                    </Col>
                    <Col>
                        <Image src="/hacka.jpg" height = {200} width = "100%"/>
                    </Col>
                </Row>
                <Row className = {styles.rowSecondary}>
                    <Col className = {styles.col}>
                        <h3><b>Browse our Startup Community</b></h3>
                        <span style = {{fontSize: 14}}>Apply filters to suit your needs and get instant access 
                        to our Startup Community to just browse, acquire or buy products.</span>
                        <Button variant = "cta" size = "md" style = {{margin: 10}} href="/browseStartup">Browse Startups</Button>
                    </Col>
                    <Col>
                        <Image src="/browse.jpg" height = {200} width = "100%"/>
                    </Col>
                </Row>
                <Row className = {styles.rowPrimary}>
                    <Col className = {styles.col}>
                        <h3><b>Form Virtual Cohorts</b></h3>
                        <span style = {{fontSize: 14}}>Form groups with our other Clients, filter Startups based on 
                        Functionality/Sector, 
                        and review Startups already curated by us.</span>
                        <Button variant = "cta" size = "md" style = {{margin: 10}}>Start Collaborating!</Button>
                    </Col>
                    <Col>
                        <Image src="/3.jpg" height = {200} width = "100%"/>
                    </Col>
                </Row>
                <Row className = {styles.rowSecondary}>
                    <Col className = {styles.col}>
                        <h3><b>Browse Previous Solutions</b></h3>
                        <span style = {{fontSize: 14}}>Go through solutions that have already been Reviewed, 
                        approved, and categorized, by us at KPMG. </span>
                        <Button variant = "cta" size = "md" style = {{margin: 10}}>Browse Solutions</Button>
                    </Col>
                    <Col>
                        <Image src="/4.jpg" height = {200} width = "100%"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default SecondFold;