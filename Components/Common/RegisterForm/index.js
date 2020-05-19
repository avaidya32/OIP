import React, { useState } from "react";
import styles from "./register-form.module.scss";
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import Router from "next/Router";

const RegisterForm = ({ page }) => {
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

  if (page === "Client") {
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
            <Form.Control
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
              fetch("/api/register/client", {
                method: "POST",
                body: JSON.stringify({
                  Name: name,
                  Email: email,
                  OrgName: orgname,
                  Number: number,
                  Description: description,
                  Sector: sector,
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
                  console.log("from register client:", payload);
                  Router.push(`/clientHome?id=${payload.id}`);
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
  if (page === "Startup") {
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
            <Form.Control
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
              fetch("/api/register/startup", {
                method: "POST",
                body: JSON.stringify({
                  Name: name,
                  Email: email,
                  OrgName: orgname,
                  Number: number,
                  Description: description,
                  Sector: sector,
                  Username: username,
                  Password: password,
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
                  Router.push(`/browseStartup`);
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
  if (page === "Student") {
    return (
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
  if (page === "VC") {
    return (
      <div className={styles.formContainer}>
        <Form>
          <p>OrgName:</p>
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
              value={number}
              onChange={(event) => {
                event.preventDefault();
                setNumber(event.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="cta"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              fetch("/api/register/vc", {
                method: "POST",
                body: JSON.stringify({
                  Name: name,
                  Email: email,
                  Number: number,
                  OrgName: orgname,
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
                  console.log("from register vc:", payload, payload.data);
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
  if (page === "University") {
    return (
      <div className={styles.formContainer}>
        <Form>
          <p>Name</p>
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
          <p>University Name</p>
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
          <p>Contact Number</p>
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
          <p>Email Id</p>
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
          <p>Username:</p>
          <Form.Group controlId="username" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="text"
              required={true}
              value={username}
              onChange={(event) => {
                event.preventDefault();
                setUsername(event.target.value);
              }}
            />
          </Form.Group>
          <p>Password:</p>
          <Form.Group controlId="password" className={styles.formGroup}>
            <Form.Control
              maxLength={30}
              aria-label="name-edit"
              className={styles.control}
              type="password"
              required={true}
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
            onClick={() => {
              fetch("/api/register/university", {
                method: "POST",
                body: JSON.stringify({
                  Name: name,
                  Email: email,
                  Number: number,
                  University: university,
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
                    "from register university:",
                    payload,
                    payload.data
                  );
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

export default RegisterForm;

//GET REQUEST
// onClick={() =>
//   fetch("/api/test/create")
//     .then((res) => {
//         return res.json();
//     })
//     .then((payload) => {
//       console.log(payload);
//       const { data } = payload;
//       Router.push(`/clientHome?page=${data}`).catch((e) => {
//         console.log(e);
//       });
//     })
// }
