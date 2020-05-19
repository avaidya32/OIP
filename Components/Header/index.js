import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import styles from './header.module.scss';
import {Image} from 'react-bootstrap';

const Header = () => {
  return (
    <div className = {styles.container}>
      <div className = {styles.logo}>
      <a href = "/">
        <Image src = "/KPMG-logo.png" height = {40} width = {'auto'}/>
      </a>
      </div>
      <div className = {styles.list}>
        <a href = "/about">About</a>
        <a href = "/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Header;