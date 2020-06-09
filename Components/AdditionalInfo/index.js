import React, { useState } from "react";
import styles from "./additional-info.module.scss";
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import Router from "next/Router";
//require("../../models/GoogleUsers");

const AdditionalInfo = ({ user }) => {
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
  const id=user._id;
  const x = 1;

  if (user.Role === "Student") {
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
            <Button
              variant="cta"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                fetch("/api/update/student", {
                  method: "POST",
                  body: JSON.stringify({
                    id: id,
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
                    console.log(
                      "from register student:",
                      payload,
                      payload.data
                    );
                    Router.push(`/studentHome`);
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
  } else if (user.Role === "Client") {
    return (
      <div className={styles.formContainer}>
        <Form>
          <p>Organization Name:</p>
          <Form.Group controlId="OrgName" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="text"
              required={true}
              value={orgname}
              onChange={(event) => {
                event.preventDefault();
                setOrgName(event.target.value);
              }}
            />
          </Form.Group>
          <p>Name:</p>
          <Form.Group controlId="Name" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="name"
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
              value={number}
              onChange={(event) => {
                event.preventDefault();
                setNumber(event.target.value);
              }}
            />
          </Form.Group>
          <p>Description of Organization:</p>
          <Form.Group controlId="CliOrgDesc" className={styles.formGroup}>
            <Form.Control
              maxLength={200}
              aria-label="name-edit"
              className={styles.control}
              style={{ minWidth: 40 }}
              as="textarea"
              rows="3"
              required={true}
              height="300px"
              value={description}
              onChange={(event) => {
                event.preventDefault();
                setDescription(event.target.value);
              }}
            />
          </Form.Group>
          <p>Sector of Industry:</p>
          <Form.Group controlId="OrgSec" className={styles.formGroup}>
            {/* <Form.Control
            maxLength={30}
            aria-label="name-edit"
            className={styles.control}
            type="text"
            required={true}
            value={sector}
            onChange={(event) => {
              event.preventDefault();
              setSector(event.target.value);
            }}
          /> */}
            <DropdownButton
              variant="cta"
              title="Sector of Industry"
              size="sm"
              style={{ marginRight: "10px" }}
            >
              <Dropdown.Item
                href="#/action-1"
                onClick={() => {
                  setSector("Pharmaceutical");
                }}
              >
                Pharmaceutical
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => {
                  setSector("Financial");
                }}
              >
                Financial
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => {
                  setSector("IT");
                }}
              >
                IT
              </Dropdown.Item>
            </DropdownButton>
          </Form.Group>
          <Button
            variant="cta"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              fetch("/api/update/client", {
                method: "POST",
                body: JSON.stringify({
                  id:id,
                  Name: name,
                  Email: email,
                  OrgName: orgname,
                  Number: number,
                  Description: description,
                  Sector: sector,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
                .then((res) => {
                  return res.json(res);
                })
                .then((payload) => {
                  console.log("from register client:", payload);
                  Router.push(`/clientHome?id=${payload._id}&role=Client`);
                })
                .catch((e) => {
                  console.log(e);
                });
            }} 
          >
            Register
          </Button>
        </Form>
      </div>
    );
  } else if (user.Role === "Startup") {
    return (
      <div className={styles.formContainer}>
        <Form>
          <p>Organization Name:</p>
          <Form.Group controlId="OrgName" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="text"
              required={true}
              value={orgname}
              onChange={(event) => {
                event.preventDefault();
                setOrgName(event.target.value);
              }}
            />
          </Form.Group>
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
              value={number}
              onChange={(event) => {
                event.preventDefault();
                setNumber(event.target.value);
              }}
            />
          </Form.Group>
          <p>Description of Organization:</p>
          <Form.Group controlId="StaOrgDesc" className={styles.formGroup}>
            <Form.Control
              maxLength={200}
              aria-label="name-edit"
              className={styles.control}
              style={{ minWidth: 40 }}
              as="textarea"
              rows="3"
              required={true}
              height="300px"
              value={description}
              onChange={(event) => {
                event.preventDefault();
                setDescription(event.target.value);
              }}
            />
          </Form.Group>
          <p>Sector of Industry:</p>
          <Form.Group controlId="OrgSec" className={styles.formGroup}>
            {/* <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="text"
              required={true}
              value={sector}
              onChange={(event) => {
                event.preventDefault();
                setSector(event.target.value);
              }}
            /> */}
            <DropdownButton
              variant="cta"
              title="Sector of Industry"
              size="sm"
              style={{ marginRight: "10px" }}
            >
              <Dropdown.Item
                href="#/action-1"
                onClick={() => {
                  setSector("Pharmaceutical");
                }}
              >
                Pharmaceutical
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => {
                  setSector("Financial");
                }}
              >
                Financial
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => {
                  setSector("IT");
                }}
              >
                IT
              </Dropdown.Item>
            </DropdownButton>
          </Form.Group>
          <p>Specialization:</p>
          <Form.Group controlId="Spec" className={styles.formGroup}>
            {/* <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="text"
              required={true}
              value={tech}
              onChange={(event) => {
                event.preventDefault();
                setTech(event.target.value);
              }}
            /> */}
            <DropdownButton
              variant="cta"
              title="Sector of Industry"
              size="sm"
              style={{ marginRight: "10px" }}
            >
              <Dropdown.Item
                // href="#/action-1"
                onClick={() => {
                  setTech("5G");
                }}
              >
                5G
              </Dropdown.Item>
              <Dropdown.Item
                // href="#/action-2"
                onClick={() => {
                  setTech("IoT");
                }}
              >
                IoT
              </Dropdown.Item>
              <Dropdown.Item
                // href="#/action-3"
                onClick={() => {
                  setTech("ML");
                }}
              >
                ML
              </Dropdown.Item>
            </DropdownButton>
          </Form.Group>
          <Button
            variant="cta"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              fetch("/api/update/startup", {
                method: "POST",
                body: JSON.stringify({
                  id:id,
                  Name: name,
                  Email: email,
                  OrgName: orgname,
                  Number: number,
                  Description: description,
                  Sector: sector,
                  Tech: tech,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
                .then((res) => {
                  return res.json(res);
                })
                .then((payload) => {
                  console.log("from register client:", payload, payload.data);
                  Router.push(`/startupHome?id=${payload._id}`);
                })
                .catch((e) => {
                  console.log(e);
                });
            }}
          >
            Register
          </Button>
        </Form>
      </div>
    );
  }
};

export default AdditionalInfo;
