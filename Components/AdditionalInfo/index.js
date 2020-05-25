import React, { useState } from "react";
import styles from "./additional-info.module.scss";
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import Router from "next/Router";
//require("../../models/GoogleUsers");

const AdditionalInfo = ({ GoogleId }) => {
  const [name, setName] = useState("");
  const [orgname, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [sector, setSector] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [university, setUniversity] = useState("");
  const [tech, setTech] = useState("");
  const [year, setYear] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [googleId, setGoogleId] = useState("");
  const x = 1;

  // if (x === 1) {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Form>
          <p>Name:</p>
          <Form.Group controlId="name" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="text"
              required={true}
              value={name}
              onChange={(event) => {
                event.preventDefault();
                setName(event.target.value);
              }}
            />
          </Form.Group>
          <p>Email ID:</p>
          <Form.Group controlId="email" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="text"
              required={true}
              value={email}
              onChange={(event) => {
                event.preventDefault();
                setEmail(event.target.value);
              }}
            />
          </Form.Group>
          <p>Contact Number:</p>
          <Form.Group controlId="number" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="number"
              required={true}
              value={Number}
              onChange={(event) => {
                event.preventDefault();
                setNumber(event.target.value);
              }}
            />
          </Form.Group>
          <p>University:</p>
          <Form.Group controlId="Uni" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="text"
              required={true}
              value={university}
              onChange={(event) => {
                event.preventDefault();
                setUniversity(event.target.value);
              }}
            />
          </Form.Group>
          <p>Year of Study:</p>
          <Form.Group controlId="StuYear" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="number"
              required={true}
              value={year}
              onChange={(event) => {
                event.preventDefault();
                setYear(event.target.value);
              }}
            />
          </Form.Group>
          <p>Specialization</p>
          <Form.Group controlId="Spec" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="text"
              required={true}
              value={specialization}
              onChange={(event) => {
                event.preventDefault();
                setSpecialization(event.target.value);
              }}
            />
          </Form.Group>
          <p>Username:</p>
          <Form.Group controlId="username" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="text"
              required={true}
              height="300px"
              value={username}
              onChange={(event) => {
                event.preventDefault();
                setUsername(event.target.value);
              }}
            />
          </Form.Group>
          <p>Password</p>
          <Form.Group controlId="password" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="CliPass"
              className={styles.control}
              type="password"
              required={true}
              height="300px"
              color="blue"
              value={password}
              onChange={(event) => {
                event.preventDefault();
                setPassword(event.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="cta"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              fetch("/api/register/student", {
                method: "POST",
                body: JSON.stringify({
                  GoogleID: GoogleId,
                  Name: name,
                  Email: email,
                  University: university,
                  Number: number,
                  Year: year,
                  Specialization: specialization,
                  Username: username,
                  Password: password,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
                .then((res) => {
                  return res.json(res);
                })
                .then((payload) => {
                  console.log("from register student:", payload, payload.data);
                  // Router.push(`/studentHome`);
                })
                .catch((e) => {
                  console.log(e);
                });
            }}
          >
            Register
          </Button>
          <Button
            variant="cta"
            onClick={() => {
              Router.push(`/api/auth/google/logout?GoogleId=${GoogleId}`);
            }}
          >
            Logout
          </Button>
        </Form>
      </div>
    </div>
  );
};
// };

export default AdditionalInfo;
