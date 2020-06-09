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
import ThirdFold from "./SecondFold"
import Summary2 from "../../Components/ApplyProblem/Summary";
import SecondFold from "../../Components/ApplyProblem/SecondFold";


const ProbPage = ({dataObject}) =>{
    return(
        <div className={styles.container}>
                {/* <Summary body={dataObject}/> */}
                <Summary2 body={dataObject.data} />
                <SecondFold body={dataObject.data} />
                <ThirdFold body={dataObject.data2} />
        </div>
    )
}

export default ProbPage;