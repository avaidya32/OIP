import React, { useState } from "react";
// const express = require('express');
// const routes = express().Router();
import Router from "next/Router";
import styles from "./start-hackathon.module.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Social from "../HackathonForms/Social";
import ApplicationBased from "../HackathonForms/ApplicationBased";
import LanguageBased from "../HackathonForms/LanguageBased";
import GroupTargeted from "../HackathonForms/GroupTargeted";
import CodeSprint from "../HackathonForms/CodeSprint";
import OfflineForm from "../HackathonForms/OfflineForm";
import Recruitment from "../HackathonForms/Recruitment";

const StartHackathon = ({ info }) => {
  if(info.type==="Social"){
    return(
      <>
      <Social client_id = {info.client_id}/>
      </>
    )
  } else if(info.type==="Application-based"){
    return(
      <>
      <ApplicationBased client_id = {info.client_id}/>
      </>
    )
  }else if(info.type==="Language-based"){
    return(
      <>
      <LanguageBased client_id = {info.client_id}/>
      </>
    )
  }else if(info.type==="Group-targeted"){
    return(
      <>
      <GroupTargeted client_id = {info.client_id}/>
      </>
    )
  }else if(info.type==="Code-sprint"){
    return(
      <>
      <CodeSprint client_id = {info.client_id}/>
      </>
    )
  } else if(info.type==="Offline"){
    return(
      <>
      <OfflineForm client_id = {info.client_id} />
      </>
    )
  } else if(info.type==="Recruitment"){
    return(
      <>
      <Recruitment client_id = {info.client_id} />
      </>
    )
  }
  // const [problemName, setProblemName] = useState("");
  // const [orgname, setOrgName] = useState("");
  // const [mode, setMode] = useState("");
  // const [date, setDate] = useState("");
  // const [venue, setVenue] = useState("");
  // const [duration, setDuration] = useState("");
  // const [statement, setStatement] = useState("");
  // const [reward, setReward] = useState("");
  // const [link, setLink] = useState("");
  // const [file, setFile] = useState();
  // console.log(file);
  // return (
  //   <div className={styles.container}>
  //     <Container>
  //       <Row className={styles.innerContainer}>
  //         <Col className={styles.col}>
  //           <h2 style={{ marginTop: "3vh", paddingLeft: "40px" }}>
  //             Post your{" "}
  //             <span style={{ color: "var(--textHighlight)" }}>Problem</span>
  //           </h2>
  //           <div className={styles.formContainer}>
  //             <Form>
  //               <p>Name of Organisation:</p>
  //               <Form.Group controlId="OrgName" className={styles.formGroup}>
  //                 <Form.Control
  //                   maxLength={50}
  //                   aria-label="name-edit"
  //                   className={styles.control}
  //                   type="text"
  //                   required={true}
  //                   value={orgname}
  //                   onChange={(event) => {
  //                     event.preventDefault();
  //                     setOrgName(event.target.value);
  //                   }}
  //                 />
  //               </Form.Group>
  //               <p>Name of Problem:</p>
  //               <Form.Group controlId="ProbName" className={styles.formGroup}>
  //                 <Form.Control
  //                   maxLength={50}
  //                   aria-label="name-edit"
  //                   className={styles.control}
  //                   type="text"
  //                   required={true}
  //                   value={problemName}
  //                   onChange={(event) => {
  //                     event.preventDefault();
  //                     setProblemName(event.target.value);
  //                   }}
  //                 />
  //               </Form.Group>
  //               <p>Mode of Conduction:</p>
  //               <Form.Group controlId="mode" className={styles.formGroup}>
  //                 <Form.Control
  //                   maxLength={30}
  //                   aria-label="name-edit"
  //                   className={styles.control}
  //                   type="email"
  //                   required={true}
  //                   value={mode}
  //                   onChange={(event) => {
  //                     event.preventDefault();
  //                     setMode(event.target.value);
  //                   }}
  //                 />
  //               </Form.Group>
  //               <p>Date of Conduction:</p>
  //               <Form.Group controlId="dateHack" className={styles.formGroup}>
  //                 <Form.Control
  //                   maxLength={30}
  //                   aria-label="name-edit"
  //                   className={styles.control}
  //                   type="date"
  //                   required={true}
  //                   value={date}
  //                   onChange={(event) => {
  //                     event.preventDefault();
  //                     setDate(event.target.value);
  //                   }}
  //                 />
  //               </Form.Group>
  //               <p>Venue of Conduction*:</p>
  //               <Form.Group controlId="place" className={styles.formGroup}>
  //                 <Form.Control
  //                   maxLength={30}
  //                   aria-label="name-edit"
  //                   className={styles.control}
  //                   type="text"
  //                   required={true}
  //                   height="300px"
  //                   value={venue}
  //                   onChange={(event) => {
  //                     event.preventDefault();
  //                     setVenue(event.target.value);
  //                   }}
  //                 />
  //               </Form.Group>
  //               <p>Duration:</p>
  //               <Form.Group controlId="time" className={styles.formGroup}>
  //                 <Form.Control
  //                   maxLength={30}
  //                   aria-label="CliPass"
  //                   className={styles.control}
  //                   type="number"
  //                   required={true}
  //                   height="300px"
  //                   value={duration}
  //                   onChange={(event) => {
  //                     event.preventDefault();
  //                     setDuration(event.target.value);
  //                   }}
  //                 />
  //               </Form.Group>
  //               <p>Problem Statement:</p>
  //               <Form.Group controlId="ProbState" className={styles.formGroup}>
  //                 <Form.Control
  //                   maxLength={1000}
  //                   aria-label="CliPass"
  //                   className={styles.control}
  //                   as="textarea"
  //                   rows="5"
  //                   required={true}
  //                   height="300px"
  //                   value={statement}
  //                   onChange={(event) => {
  //                     event.preventDefault();
  //                     setStatement(event.target.value);
  //                   }}
  //                 />
  //               </Form.Group>
  //               <p>Reward Type:</p>
  //               <Form.Group controlId="Reward" className={styles.formGroup}>
  //                 <Form.Control
  //                   maxLength={100}
  //                   aria-label="CliPass"
  //                   className={styles.control}
  //                   type="text"
  //                   required={true}
  //                   height="300px"
  //                   value={reward}
  //                   onChange={(event) => {
  //                     event.preventDefault();
  //                     setReward(event.target.value);
  //                   }}
  //                 />
  //               </Form.Group>
  //               <p>Image Attachment*:</p>
  //               {/* <form action='/api/upload' method="POST" encType="multipart/form-data">
  //                 <input type="file" name="file" id="file"></input>
  //                   <label for="file">Choose file</label>
  //                 <input type="submit" value="Submit"></input>
  //               </form> */}

  //               {/* <form action = '/uploadImage' enctype ="multipart-form-data" method = "POST">
  //                   <input type = "file" name="myFile" accept="image/*">
                      
  //                   </input>
  //                   <input type="sumbit" value = "Upload image"></input>
  //               </form> */}

  //               <Form.Group controlId="Img" className={styles.formGroup}>
  //                 <Form.File
  //                   onChange={(e) => {
  //                     setFile(e.target.files[0]);
  //                   }}
  //                   type="file"
  //                   name="file"
  //                   id="file"
  //                   label="Image Input"
  //                   custom
  //                 />
  //               </Form.Group>
  //               <p>Other Links*:</p>
  //               <Form.Group controlId="attach" className={styles.formGroup}>
  //                 <Form.Control
  //                   maxLength={30}
  //                   aria-label="CliPass"
  //                   className={styles.control}
  //                   type="attachment"
  //                   required={true}
  //                   height="300px"
  //                   value={link}
  //                   onChange={(event) => {
  //                     event.preventDefault();
  //                     setLink(event.target.value);
  //                   }}
  //                 />
  //               </Form.Group>
  //               <Button
  //                 variant="cta"
  //                 size="lg"
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   fetch("/api/hackathon/putinfo", {
  //                     method: "POST",
  //                     body: JSON.stringify({
  //                       ClientId: client_id,
  //                       OrgName: orgname,
  //                       ProblemName: problemName,
  //                       Mode: mode,
  //                       Date: date,
  //                       Venue: venue,
  //                       Duration: duration,
  //                       Statement: statement,
  //                       Reward: reward,
  //                       Link: link,
  //                     }),
  //                     headers: {
  //                       "Content-type": "application/json; charset=UTF-8",
  //                     },
  //                   })
  //                     .then((res) => {
  //                       return res.json();
  //                     })
  //                     .then((payload) => {
  //                       const { name, _id } = payload;
  //                       const id = payload.id;
  //                       const formData = new FormData();
  //                       console.log(formData);
  //                       formData.append("file", file);
  //                       fetch(`/api/upload?id=${payload.id}`, {
  //                         method: "POST",
  //                         // body: JSON.stringify({
  //                         //   file: formData,
  //                         //   // name: name
  //                         //   name: problemName
  //                         // })
  //                         body: formData,
  //                       })
  //                         .then((res) => {
  //                           return res.json();
  //                         })
  //                         .then((response) => {
  //                           //Router.push(`/probPage?id=${id}`);
  //                         })
  //                         .catch((e) => {
  //                           console.log("error while calling /upload", e);
  //                           //TODO:
  //                         });
  //                       //Router.push(`/probPage?name=${name}`);
  //                     })
  //                     .catch((e) => {
  //                       console.log(e);
  //                     });
  //                 }}
  //               >
  //                 Post Problem
  //               </Button>
  //             </Form>
  //           </div>
  //         </Col>
  //       </Row>
  //     </Container>
};

export default StartHackathon;
