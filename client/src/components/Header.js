import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
// import Home from "../Home/Home";
// import AboutMe from "../AboutMe/AboutMe";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <span className={classes.name}>kavya mandla</span>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="/hireme">Hire Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
