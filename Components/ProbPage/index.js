import React from "react";
import styles from "./prob-page.module.scss";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import Summary from "./Summary"
import SecondFold from "./SecondFold"

const ProbPage = ({dataObject}) =>{
    return(
        <div className={styles.container}>
                <Summary body={dataObject}/>
                <SecondFold />
        </div>
    )
}

export default ProbPage;