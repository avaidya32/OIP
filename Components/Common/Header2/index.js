import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import HomePage from "../HomePage";
import styles from "./header.module.scss";
import { Image } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

const Header2 = () => {
  return (
    // <div className = {styles.container}>
    //   <div className = {styles.logo}>
    //   <a href = "/">
    //     <Image src = "/KPMG-logo.png" height = {40} width = {'auto'}/>
    //   </a>
    //   </div>
    //   <div className = {styles.list}>
    //     <a href = "/about">About</a>
    //     <a href = "/contact">Contact Us</a>
    //   </div>
    // </div>
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/KPMG-logo.png"
          width="auto"
          height="40"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
      <Nav className="mr-auto" style={{display:"flex", alignItems:"right", justifyContent:"right", flexDirection:"row"}}>
        <Nav.Link href="/login" style={{marginRight: "150vh"}}>Login</Nav.Link>
        <Nav.Link>About</Nav.Link>
        <Nav.Link>Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header2;
